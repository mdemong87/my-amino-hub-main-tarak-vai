import { ProductCard } from "./ProductCard";
import { useWooProducts } from "@/hooks/useWooCommerce";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductsGridProps {
  title: string;
  subtitle?: string;
  showAll?: boolean;
}

export const ProductsGrid = ({ title, subtitle, showAll = false }: ProductsGridProps) => {
  const { data, isLoading, error } = useWooProducts(undefined, 1, showAll ? 8 : 4);

  const products = data?.products || [];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: showAll ? 8 : 4 }).map((_, i) => (
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
          ) : error ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Unable to load products. Please try again later.
            </div>
          ) : products.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No products found.
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

        {/* View All Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              View All Products
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
