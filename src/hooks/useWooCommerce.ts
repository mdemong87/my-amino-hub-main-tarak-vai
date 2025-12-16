import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  price: number;
  regular_price: number;
  sale_price: number | null;
  on_sale: boolean;
  description: string;
  short_description: string;
  image: string;
  images: string[];
  categories: { id: number; name: string; slug: string }[];
  hasVariants: boolean;
  stock_status: string;
  stock_quantity: number | null;
  attributes: any[];
  variations: number[];
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: string | null;
}

export interface WooReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export interface WooProductDetail {
  id: string;
  name: string;
  slug: string;
  price: number;
  regularPrice: number;
  salePrice: number | null;
  onSale: boolean;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  category: string;
  categories: { id: number; name: string; slug: string }[];
  hasVariants: boolean;
  stockStatus: string;
  stockQuantity: number | null;
  inStock: boolean;
  attributes: { id: number; name: string; options: string[] }[];
  variants: {
    id: string;
    name: string;
    price: number;
    regularPrice: number;
    salePrice: number | null;
    stockStatus: string;
    inStock: boolean;
    image: string | null;
  }[];
  specifications: { label: string; value: string }[];
  rating: number;
  reviewCount: number;
  reviews: WooReview[];
}

// Fallback static data for development/testing
const FALLBACK_PRODUCTS: WooProduct[] = [
  {
    id: 1,
    name: "BPC-157 (5mg)",
    slug: "bpc-157-5mg",
    price: 39.99,
    regular_price: 49.99,
    sale_price: 39.99,
    on_sale: true,
    description: "Body Protection Compound-157 for research purposes only.",
    short_description: "High purity BPC-157 peptide for laboratory research.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=400&fit=crop"],
    categories: [{ id: 1, name: "Peptides", slug: "peptides" }],
    hasVariants: true,
    stock_status: "instock",
    stock_quantity: 50,
    attributes: [{ name: "Size", options: ["5mg", "10mg"] }],
    variations: [101, 102],
  },
  {
    id: 2,
    name: "TB-500 (5mg)",
    slug: "tb-500-5mg",
    price: 44.99,
    regular_price: 44.99,
    sale_price: null,
    on_sale: false,
    description: "Thymosin Beta-4 fragment for research purposes only.",
    short_description: "Premium quality TB-500 for laboratory research.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop"],
    categories: [{ id: 1, name: "Peptides", slug: "peptides" }],
    hasVariants: false,
    stock_status: "instock",
    stock_quantity: 35,
    attributes: [],
    variations: [],
  },
  {
    id: 3,
    name: "MK-677 (Ibutamoren)",
    slug: "mk-677-ibutamoren",
    price: 54.99,
    regular_price: 54.99,
    sale_price: null,
    on_sale: false,
    description: "MK-677 Ibutamoren for research purposes only.",
    short_description: "High purity MK-677 for laboratory research.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=400&fit=crop"],
    categories: [{ id: 2, name: "SARMs", slug: "sarms" }],
    hasVariants: true,
    stock_status: "instock",
    stock_quantity: 25,
    attributes: [{ name: "Quantity", options: ["30 capsules", "60 capsules"] }],
    variations: [201, 202],
  },
  {
    id: 4,
    name: "RAD-140 (Testolone)",
    slug: "rad-140-testolone",
    price: 64.99,
    regular_price: 74.99,
    sale_price: 64.99,
    on_sale: true,
    description: "RAD-140 Testolone for research purposes only.",
    short_description: "Premium RAD-140 for laboratory research.",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=400&fit=crop"],
    categories: [{ id: 2, name: "SARMs", slug: "sarms" }],
    hasVariants: false,
    stock_status: "instock",
    stock_quantity: 40,
    attributes: [],
    variations: [],
  },
  {
    id: 5,
    name: "PT-141 (Bremelanotide)",
    slug: "pt-141-bremelanotide",
    price: 49.99,
    regular_price: 49.99,
    sale_price: null,
    on_sale: false,
    description: "PT-141 Bremelanotide for research purposes only.",
    short_description: "High purity PT-141 for laboratory research.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop"],
    categories: [{ id: 1, name: "Peptides", slug: "peptides" }],
    hasVariants: false,
    stock_status: "instock",
    stock_quantity: 30,
    attributes: [],
    variations: [],
  },
  {
    id: 6,
    name: "GW-501516 (Cardarine)",
    slug: "gw-501516-cardarine",
    price: 59.99,
    regular_price: 59.99,
    sale_price: null,
    on_sale: false,
    description: "GW-501516 Cardarine for research purposes only.",
    short_description: "Premium Cardarine for laboratory research.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop"],
    categories: [{ id: 2, name: "SARMs", slug: "sarms" }],
    hasVariants: true,
    stock_status: "instock",
    stock_quantity: 20,
    attributes: [{ name: "Quantity", options: ["30 capsules", "60 capsules", "90 capsules"] }],
    variations: [301, 302, 303],
  },
  {
    id: 7,
    name: "Melanotan II",
    slug: "melanotan-ii",
    price: 34.99,
    regular_price: 39.99,
    sale_price: 34.99,
    on_sale: true,
    description: "Melanotan II for research purposes only.",
    short_description: "High purity Melanotan II for laboratory research.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop"],
    categories: [{ id: 1, name: "Peptides", slug: "peptides" }],
    hasVariants: false,
    stock_status: "instock",
    stock_quantity: 45,
    attributes: [],
    variations: [],
  },
  {
    id: 8,
    name: "LGD-4033 (Ligandrol)",
    slug: "lgd-4033-ligandrol",
    price: 69.99,
    regular_price: 69.99,
    sale_price: null,
    on_sale: false,
    description: "LGD-4033 Ligandrol for research purposes only.",
    short_description: "Premium LGD-4033 for laboratory research.",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
    images: ["https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop"],
    categories: [{ id: 2, name: "SARMs", slug: "sarms" }],
    hasVariants: false,
    stock_status: "instock",
    stock_quantity: 28,
    attributes: [],
    variations: [],
  },
];

const FALLBACK_CATEGORIES: WooCategory[] = [
  { id: 1, name: "Peptides", slug: "peptides", count: 4, image: null },
  { id: 2, name: "SARMs", slug: "sarms", count: 4, image: null },
];

const USE_FALLBACK = true; // Toggle this to switch between API and fallback

export const useWooProducts = (category?: string, page = 1, perPage = 20) => {
  return useQuery({
    queryKey: ["woo-products", category, page, perPage],
    queryFn: async () => {
      if (USE_FALLBACK) {
        let filteredProducts = FALLBACK_PRODUCTS;
        if (category) {
          filteredProducts = FALLBACK_PRODUCTS.filter(p => 
            p.categories.some(c => c.id.toString() === category || c.slug === category)
          );
        }
        const startIndex = (page - 1) * perPage;
        const paginatedProducts = filteredProducts.slice(startIndex, startIndex + perPage);
        return {
          products: paginatedProducts,
          total: filteredProducts.length,
          totalPages: Math.ceil(filteredProducts.length / perPage),
          page,
        };
      }

      const { data, error } = await supabase.functions.invoke("woocommerce-products", {
        body: { category, page, per_page: perPage },
      });

      if (error) {
        console.error("Error fetching products:", error);
        throw error;
      }

      return data as {
        products: WooProduct[];
        total: number;
        totalPages: number;
        page: number;
      };
    },
  });
};

export const useWooCategories = () => {
  return useQuery({
    queryKey: ["woo-categories"],
    queryFn: async () => {
      if (USE_FALLBACK) {
        return { categories: FALLBACK_CATEGORIES };
      }

      const { data, error } = await supabase.functions.invoke("woocommerce-categories");

      if (error) {
        console.error("Error fetching categories:", error);
        throw error;
      }

      return data as { categories: WooCategory[] };
    },
  });
};

export const useWooProduct = (productId: string | undefined) => {
  return useQuery({
    queryKey: ["woo-product", productId],
    queryFn: async () => {
      if (!productId) throw new Error("Product ID is required");

      if (USE_FALLBACK) {
        const product = FALLBACK_PRODUCTS.find(p => p.id.toString() === productId);
        if (!product) throw new Error("Product not found");
        
        const detailedProduct: WooProductDetail = {
          id: product.id.toString(),
          name: product.name,
          slug: product.slug,
          price: product.price,
          regularPrice: product.regular_price,
          salePrice: product.sale_price,
          onSale: product.on_sale,
          description: product.description,
          shortDescription: product.short_description,
          image: product.image,
          images: product.images,
          category: product.categories[0]?.name || "Uncategorized",
          categories: product.categories,
          hasVariants: product.hasVariants,
          stockStatus: product.stock_status,
          stockQuantity: product.stock_quantity,
          inStock: product.stock_status === "instock",
          attributes: product.attributes.map((attr, idx) => ({
            id: idx,
            name: attr.name,
            options: attr.options,
          })),
          variants: product.hasVariants && product.attributes[0]?.options 
            ? product.attributes[0].options.map((opt: string, idx: number) => ({
                id: `${product.id}-${idx}`,
                name: opt,
                price: product.price + (idx * 10),
                regularPrice: product.regular_price + (idx * 10),
                salePrice: product.sale_price ? product.sale_price + (idx * 10) : null,
                stockStatus: "instock",
                inStock: true,
                image: null,
              })) 
            : [],
          specifications: [
            { label: "Purity", value: "≥99%" },
            { label: "Form", value: "Lyophilized Powder" },
            { label: "Storage", value: "Store at -20°C" },
          ],
          rating: 4.8,
          reviewCount: 12,
          reviews: [
            {
              id: "1",
              author: "Research Lab A",
              rating: 5,
              date: "2024-01-15",
              title: "Excellent Quality",
              content: "Perfect for our research needs. High purity confirmed.",
              verified: true,
            },
            {
              id: "2",
              author: "Lab Tech",
              rating: 4,
              date: "2024-01-10",
              title: "Good Product",
              content: "Consistent quality across multiple orders.",
              verified: true,
            },
          ],
        };
        
        return { product: detailedProduct };
      }

      const { data, error } = await supabase.functions.invoke("woocommerce-product", {
        body: { productId },
      });

      if (error) {
        console.error("Error fetching product:", error);
        throw error;
      }

      return data as { product: WooProductDetail };
    },
    enabled: !!productId,
  });
};
