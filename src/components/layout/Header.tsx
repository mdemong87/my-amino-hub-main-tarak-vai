import { useState } from "react";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
const navLinks = [{
  label: "Home",
  href: "/"
}, {
  label: "Shop",
  href: "/shop"
}, {
  label: "About Us",
  href: "/about"
}, {
  label: "Quality Assurance",
  href: "/quality"
}, {
  label: "Contact",
  href: "/contact"
}];
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    totalItems,
    openCart
  } = useCart();
  return <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4 lg:px-0">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg helix-gradient flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-foreground" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-foreground text-lg">
                HELIX RESEARCH
              </span>
              
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </a>)}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>}
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn("lg:hidden overflow-hidden transition-all duration-300", isMenuOpen ? "max-h-96 pb-6" : "max-h-0")}>
          <nav className="flex flex-col gap-2 px-4">
            {navLinks.map(link => <a key={link.href} href={link.href} className="py-3 px-4 text-foreground font-medium hover:bg-secondary rounded-lg transition-colors">
                {link.label}
              </a>)}
          </nav>
        </div>
      </div>
    </header>;
};