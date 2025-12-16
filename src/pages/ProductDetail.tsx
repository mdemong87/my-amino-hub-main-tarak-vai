import { useParams, Link } from "react-router-dom";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";
import { ProductReviews } from "@/components/product/ProductReviews";
import { useWooProduct } from "@/hooks/useWooCommerce";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useWooProduct(id);

  const product = data?.product;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          <div className="container py-4">
            <Skeleton className="h-4 w-48" />
          </div>
          <section className="container pb-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="aspect-square w-full rounded-xl" />
              <div className="space-y-6">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-10 w-40" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link to="/shop" className="text-primary hover:underline">
              Return to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Transform WooCommerce product to match existing Product interface
  const transformedProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    originalPrice: product.onSale ? product.regularPrice : undefined,
    image: product.image,
    images: product.images,
    category: product.category,
    description: product.shortDescription || product.description,
    shortDescription: product.shortDescription,
    specifications: product.specifications,
    variants: product.variants?.map((v) => ({
      id: v.id,
      name: v.name,
      price: v.price,
    })),
    inStock: product.inStock,
    rating: product.rating,
    reviewCount: product.reviewCount,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <section className="container pb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <ProductImageGallery
              images={product.images?.length > 0 ? product.images : [product.image]}
              productName={product.name}
            />
            <ProductInfo product={transformedProduct} />
          </div>
        </section>

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <section className="container pb-12">
            <ProductSpecifications specifications={product.specifications} />
          </section>
        )}

        {/* Reviews */}
        <section className="container pb-16">
          <ProductReviews
            reviews={product.reviews || []}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
