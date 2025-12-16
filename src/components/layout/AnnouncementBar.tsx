import { useState } from "react";
import { X } from "lucide-react";

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="helix-gradient text-primary-foreground py-2.5 px-4 text-center relative">
      <div className="container mx-auto">
        <p className="text-sm font-medium">
          📦 Free shipping on orders over $150 | Same-day shipping before 12 PM CST |{" "}
          <a href="/shop" className="underline hover:no-underline font-semibold">
            Shop Now
          </a>
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
