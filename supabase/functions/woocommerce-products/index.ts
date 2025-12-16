import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Generate HMAC-SHA1 signature using Web Crypto API
async function hmacSha1(key: string, message: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(key);
  const messageData = encoder.encode(message);
  
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign']
  );
  
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

// Generate OAuth 1.0 signature
async function generateOAuthSignature(
  method: string,
  url: string,
  params: Record<string, string>,
  consumerSecret: string
): Promise<string> {
  const sortedParams = Object.keys(params)
    .sort()
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

  const signatureBaseString = [
    method.toUpperCase(),
    encodeURIComponent(url),
    encodeURIComponent(sortedParams)
  ].join('&');

  const signingKey = `${encodeURIComponent(consumerSecret)}&`;
  return await hmacSha1(signingKey, signatureBaseString);
}

async function generateOAuthParams(
  consumerKey: string,
  consumerSecret: string,
  method: string,
  baseUrl: string,
  queryParams: Record<string, string> = {}
): Promise<string> {
  const oauthParams: Record<string, string> = {
    oauth_consumer_key: consumerKey,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_nonce: crypto.randomUUID().replace(/-/g, ''),
    oauth_version: '1.0',
  };

  const allParams = { ...oauthParams, ...queryParams };
  const signature = await generateOAuthSignature(method, baseUrl, allParams, consumerSecret);
  oauthParams.oauth_signature = signature;

  const finalParams = { ...queryParams, ...oauthParams };
  return Object.keys(finalParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(finalParams[key])}`)
    .join('&');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const storeUrl = Deno.env.get('WOOCOMMERCE_STORE_URL');
    const consumerKey = Deno.env.get('WOOCOMMERCE_CONSUMER_KEY');
    const consumerSecret = Deno.env.get('WOOCOMMERCE_CONSUMER_SECRET');

    if (!storeUrl || !consumerKey || !consumerSecret) {
      console.error('Missing WooCommerce credentials');
      throw new Error('WooCommerce credentials not configured');
    }

    // Debug: Log credential info (not the actual secret values)
    console.log('Store URL:', storeUrl);
    console.log('Consumer Key starts with:', consumerKey.substring(0, 10) + '...');
    console.log('Consumer Key length:', consumerKey.length);

    let category = '';
    let perPage = 20;
    let page = 1;
    
    if (req.method === 'POST') {
      const body = await req.json();
      category = body.category || '';
      perPage = body.per_page || 20;
      page = body.page || 1;
    }

    let baseUrl = storeUrl.replace(/\/$/, '').trim();
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      baseUrl = `https://${baseUrl}`;
    }

    const endpoint = `${baseUrl}/wp-json/wc/v3/products`;
    
    // Use query parameter authentication (alternative to Basic Auth)
    const queryParams = new URLSearchParams({
      per_page: perPage.toString(),
      page: page.toString(),
      status: 'publish',
      consumer_key: consumerKey.trim(),
      consumer_secret: consumerSecret.trim(),
    });
    
    if (category) {
      queryParams.set('category', category);
    }

    const apiUrl = `${endpoint}?${queryParams.toString()}`;
    console.log('Fetching products from:', apiUrl.replace(/consumer_secret=[^&]+/, 'consumer_secret=***'));

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('WooCommerce API error:', response.status, errorText);
      throw new Error(`WooCommerce API error: ${response.status}`);
    }

    const products = await response.json();
    const totalProducts = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');

    console.log(`Fetched ${products.length} products`);

    const transformedProducts = products.map((product: any) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: parseFloat(product.price) || 0,
      regular_price: parseFloat(product.regular_price) || 0,
      sale_price: parseFloat(product.sale_price) || null,
      on_sale: product.on_sale,
      description: product.description,
      short_description: product.short_description,
      image: product.images?.[0]?.src || '/placeholder.svg',
      images: product.images?.map((img: any) => img.src) || [],
      categories: product.categories?.map((cat: any) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
      })) || [],
      hasVariants: product.type === 'variable',
      stock_status: product.stock_status,
      stock_quantity: product.stock_quantity,
      attributes: product.attributes || [],
      variations: product.variations || [],
    }));

    return new Response(JSON.stringify({
      products: transformedProducts,
      total: parseInt(totalProducts || '0'),
      totalPages: parseInt(totalPages || '1'),
      page,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in woocommerce-products function:', error);
    return new Response(JSON.stringify({ 
      error: errorMessage,
      products: [],
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
