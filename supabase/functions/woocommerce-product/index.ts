import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const storeUrl = Deno.env.get('WOOCOMMERCE_STORE_URL');
    const consumerKey = Deno.env.get('WOOCOMMERCE_CONSUMER_KEY');
    const consumerSecret = Deno.env.get('WOOCOMMERCE_CONSUMER_SECRET');

    if (!storeUrl || !consumerKey || !consumerSecret) {
      throw new Error('WooCommerce credentials not configured');
    }

    const { productId } = await req.json();
    
    if (!productId) {
      throw new Error('Product ID is required');
    }

    let baseUrl = storeUrl.replace(/\/$/, '').trim();
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      baseUrl = `https://${baseUrl}`;
    }

    // Use query parameter authentication
    const authParams = `consumer_key=${encodeURIComponent(consumerKey.trim())}&consumer_secret=${encodeURIComponent(consumerSecret.trim())}`;

    // Fetch product details
    const productEndpoint = `${baseUrl}/wp-json/wc/v3/products/${productId}?${authParams}`;
    console.log('Fetching product:', productId);

    const productResponse = await fetch(productEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!productResponse.ok) {
      const errorText = await productResponse.text();
      console.error('WooCommerce API error:', productResponse.status, errorText);
      throw new Error(`Product not found: ${productResponse.status}`);
    }

    const product = await productResponse.json();
    console.log('Fetched product:', product.name);

    // Fetch variations if product is variable
    let variations: any[] = [];
    if (product.type === 'variable' && product.variations?.length > 0) {
      const variationsEndpoint = `${baseUrl}/wp-json/wc/v3/products/${productId}/variations?per_page=100&${authParams}`;
      console.log('Fetching variations for product:', productId);

      const variationsResponse = await fetch(variationsEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (variationsResponse.ok) {
        variations = await variationsResponse.json();
        console.log(`Fetched ${variations.length} variations`);
      }
    }

    // Fetch reviews
    let reviews: any[] = [];
    const reviewsEndpoint = `${baseUrl}/wp-json/wc/v3/products/reviews?product=${productId}&per_page=50&${authParams}`;
    console.log('Fetching reviews for product:', productId);

    const reviewsResponse = await fetch(reviewsEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (reviewsResponse.ok) {
      reviews = await reviewsResponse.json();
      console.log(`Fetched ${reviews.length} reviews`);
    }

    // Transform product data
    const transformedProduct = {
      id: product.id.toString(),
      name: product.name,
      slug: product.slug,
      price: parseFloat(product.price) || 0,
      regularPrice: parseFloat(product.regular_price) || 0,
      salePrice: parseFloat(product.sale_price) || null,
      onSale: product.on_sale,
      description: product.description,
      shortDescription: product.short_description,
      image: product.images?.[0]?.src || '/placeholder.svg',
      images: product.images?.map((img: any) => img.src) || [],
      category: product.categories?.[0]?.name || 'Uncategorized',
      categories: product.categories?.map((cat: any) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
      })) || [],
      hasVariants: product.type === 'variable',
      stockStatus: product.stock_status,
      stockQuantity: product.stock_quantity,
      inStock: product.stock_status === 'instock',
      attributes: product.attributes?.map((attr: any) => ({
        id: attr.id,
        name: attr.name,
        options: attr.options,
      })) || [],
      variants: variations.map((v: any) => ({
        id: v.id.toString(),
        name: v.attributes?.map((a: any) => a.option).join(' / ') || `Variation ${v.id}`,
        price: parseFloat(v.price) || 0,
        regularPrice: parseFloat(v.regular_price) || 0,
        salePrice: parseFloat(v.sale_price) || null,
        stockStatus: v.stock_status,
        inStock: v.stock_status === 'instock',
        image: v.image?.src || null,
      })),
      specifications: product.attributes?.map((attr: any) => ({
        label: attr.name,
        value: attr.options?.join(', ') || '',
      })) || [],
      rating: parseFloat(product.average_rating) || 0,
      reviewCount: product.rating_count || 0,
      reviews: reviews.map((r: any) => ({
        id: r.id.toString(),
        author: r.reviewer,
        rating: r.rating,
        date: r.date_created,
        title: '',
        content: r.review.replace(/<[^>]*>/g, ''), // Strip HTML tags
        verified: r.verified,
      })),
    };

    return new Response(JSON.stringify({ product: transformedProduct }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in woocommerce-product function:', error);
    return new Response(JSON.stringify({ 
      error: errorMessage,
      product: null,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});