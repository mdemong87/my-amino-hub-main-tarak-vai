import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id?: string;
  productId?: number; // WooCommerce product ID
  name: string;
  price: string;
  priceRange?: string;
  image: string;
  hasVariants?: boolean;
}

export const ProductCard = ({
  id,
  productId,
  name,
  price,
  priceRange,
  image,
  hasVariants = false,
}: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Parse price string to number (remove $ and get first price if range)
    const numericPrice = parseFloat(price.replace("$", ""));
    
    addItem({
      id: id || name,
      productId: productId || parseInt(id || "0"),
      name,
      price: numericPrice,
      image,
    });
  };

  const cardContent = (
    <div className="product-card group">
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-b from-secondary to-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        <div className="flex items-center justify-between gap-4">
          <div>
            {priceRange ? (
              <span className="text-accent font-bold text-lg">{priceRange}</span>
            ) : (
              <span className="text-accent font-bold text-lg">{price}</span>
            )}
          </div>
          <Button 
            variant="cart" 
            size="sm" 
            className="shrink-0"
            onClick={hasVariants ? undefined : handleAddToCart}
          >
            {hasVariants ? (
              "Select Options"
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );

  if (id) {
    return <Link to={`/product/${id}`}>{cardContent}</Link>;
  }

  return cardContent;
};
