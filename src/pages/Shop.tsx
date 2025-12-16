import { useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/sections/ProductCard";
import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const allProducts = [
  {
    id: "bpc-157",
    name: "BPC-157",
    price: "$38.00",
    priceRange: "$38.00 – $78.00",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    hasVariants: true,
    category: "Peptides",
  },
  {
    id: "tb-500",
    name: "TB-500 (Thymosin Beta-4)",
    price: "$38.00",
    priceRange: "$38.00 – $64.00",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
    hasVariants: true,
    category: "Peptides",
  },
  {
    id: "mk-677",
    name: "MK-677 (Ibutamoren)",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    hasVariants: false,
    category: "SARMs",
  },
  {
    id: "l-carnitine",
    name: "L-Carnitine (20ML)",
    price: "$48.00",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
    hasVariants: false,
    category: "Amino Acids",
  },
  {
    id: "mots-c",
    name: "MOTS-C (10mg)",
    price: "$58.00",
    priceRange: "$58.00 – $158.00",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop",
    hasVariants: true,
    category: "Peptides",
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2 10MG",
    price: "$38.00",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=400&fit=crop",
    hasVariants: false,
    category: "Peptides",
  },
  {
    id: "igf-1-lr3",
    name: "IGF-1 LR3 1MG",
    price: "$68.00",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=400&fit=crop",
    hasVariants: false,
    category: "Peptides",
  },
  {
    id: "ghk-cu",
    name: "GHK-CU",
    price: "$44.00",
    priceRange: "$44.00 – $98.00",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop",
    hasVariants: true,
    category: "Peptides",
  },
  {
    id: "pt-141",
    name: "PT-141 (Bremelanotide)",
    price: "$42.00",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    hasVariants: false,
    category: "Peptides",
  },
  {
    id: "sermorelin",
    name: "Sermorelin 5mg",
    price: "$52.00",
    priceRange: "$52.00 – $145.00",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
    hasVariants: true,
    category: "Peptides",
  },
  {
    id: "rad-140",
    name: "RAD-140 (Testolone)",
    price: "$64.99",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    hasVariants: false,
    category: "SARMs",
  },
  {
    id: "cardarine",
    name: "Cardarine (GW-501516)",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
    hasVariants: false,
    category: "SARMs",
  },
];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <AgeVerificationModal />
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="helix-gradient text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              All Products
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Browse our complete collection of research-grade compounds. All products are third-party tested for purity and quality.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <p className="text-muted-foreground text-sm">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-2">No products found</p>
                <p className="text-muted-foreground text-sm">
                  Try adjusting your search term
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    priceRange={product.priceRange}
                    image={product.image}
                    hasVariants={product.hasVariants}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
