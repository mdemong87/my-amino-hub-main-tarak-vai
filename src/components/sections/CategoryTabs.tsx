import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { useWooProducts, useWooCategories } from "@/hooks/useWooCommerce";
import { Skeleton } from "@/components/ui/skeleton";

export const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  
  const { data: categoriesData, isLoading: categoriesLoading } = useWooCategories();
  const { data: productsData, isLoading: productsLoading } = useWooProducts(
    activeCategory || undefined, 
    1, 
    8
  );

  const categories = categoriesData?.categories || [];
  const products = productsData?.products || [];

  // Add "All Products" as the first category option
  const allCategories = [
    { id: 0, name: "All Products", slug: "", count: 0 },
    ...categories,
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Research Materials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of research-grade compounds
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categoriesLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))
          ) : (
            allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={cn(
                  "px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200",
                  activeCategory === category.slug
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-card text-foreground hover:bg-secondary border border-border"
                )}
              >
                {category.name}
              </button>
            ))
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden">
                <Skeleton className="aspect-square w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>
              </div>
            ))
          ) : products.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No products found in this category.
            </div>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={String(product.id)}
                productId={product.id}
                name={product.name}
                price={`$${product.price.toFixed(2)}`}
                priceRange={product.on_sale && product.sale_price 
                  ? `$${product.sale_price.toFixed(2)} – $${product.regular_price.toFixed(2)}`
                  : undefined
                }
                image={product.image}
                hasVariants={product.hasVariants}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
