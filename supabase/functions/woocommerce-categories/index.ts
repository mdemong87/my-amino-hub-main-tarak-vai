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
      console.error('Missing WooCommerce credentials');
      throw new Error('WooCommerce credentials not configured');
    }

    // Debug: Log credential info
    console.log('Store URL:', storeUrl);
    console.log('Consumer Key starts with:', consumerKey.substring(0, 10) + '...');

    let baseUrl = storeUrl.replace(/\/$/, '').trim();
    if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
      baseUrl = `https://${baseUrl}`;
    }

    const endpoint = `${baseUrl}/wp-json/wc/v3/products/categories`;
    
    const queryParams = new URLSearchParams({
      per_page: '100',
      hide_empty: 'true',
      consumer_key: consumerKey.trim(),
      consumer_secret: consumerSecret.trim(),
    });

    const apiUrl = `${endpoint}?${queryParams.toString()}`;
    console.log('Fetching categories from:', apiUrl.replace(/consumer_secret=[^&]+/, 'consumer_secret=***'));

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

    const categories = await response.json();
    console.log(`Fetched ${categories.length} categories`);

    const transformedCategories = categories.map((cat: any) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      count: cat.count,
      image: cat.image?.src || null,
    }));

    return new Response(JSON.stringify({ categories: transformedCategories }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in woocommerce-categories function:', error);
    return new Response(JSON.stringify({ 
      error: errorMessage,
      categories: [],
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});