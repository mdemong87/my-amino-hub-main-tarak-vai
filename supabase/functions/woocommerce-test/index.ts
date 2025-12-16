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

    // Test 1: Check if secrets are configured
    const secretsConfigured = {
      storeUrl: !!storeUrl,
      storeUrlValue: storeUrl ? storeUrl.substring(0, 30) + '...' : null,
      consumerKey: !!consumerKey,
      consumerKeyPrefix: consumerKey ? consumerKey.substring(0, 10) + '...' : null,
      consumerKeyLength: consumerKey?.length || 0,
      consumerSecret: !!consumerSecret,
      consumerSecretLength: consumerSecret?.length || 0,
    };

    // Test 2: Try to fetch the WooCommerce REST API base (no auth needed)
    let apiBaseTest = { success: false, message: '', data: null as any };
    if (storeUrl) {
      try {
        let baseUrl = storeUrl.replace(/\/$/, '').trim();
        if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
          baseUrl = `https://${baseUrl}`;
        }
        const response = await fetch(`${baseUrl}/wp-json/wc/v3`);
        apiBaseTest = {
          success: response.ok,
          message: `Status: ${response.status}`,
          data: response.ok ? 'API base accessible' : await response.text(),
        };
      } catch (e) {
        apiBaseTest = {
          success: false,
          message: e instanceof Error ? e.message : 'Unknown error',
          data: null,
        };
      }
    }

    // Test 3: Try authenticated request with query params
    let authTest = { success: false, message: '', status: 0 };
    if (storeUrl && consumerKey && consumerSecret) {
      try {
        let baseUrl = storeUrl.replace(/\/$/, '').trim();
        if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
          baseUrl = `https://${baseUrl}`;
        }
        const testUrl = `${baseUrl}/wp-json/wc/v3/products?per_page=1&consumer_key=${encodeURIComponent(consumerKey.trim())}&consumer_secret=${encodeURIComponent(consumerSecret.trim())}`;
        const response = await fetch(testUrl);
        const responseText = await response.text();
        authTest = {
          success: response.ok,
          status: response.status,
          message: response.ok ? `Got ${JSON.parse(responseText).length} products` : responseText.substring(0, 200),
        };
      } catch (e) {
        authTest = {
          success: false,
          status: 0,
          message: e instanceof Error ? e.message : 'Unknown error',
        };
      }
    }

    return new Response(JSON.stringify({
      timestamp: new Date().toISOString(),
      edgeFunctionWorking: true,
      secretsConfigured,
      apiBaseTest,
      authTest,
    }, null, 2), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: errorMessage,
      edgeFunctionWorking: true,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
