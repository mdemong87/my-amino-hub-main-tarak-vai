import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, FlaskConical } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden helix-gradient text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-helix-teal-light blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Third Party Tested & Verified</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up-delay-1 leading-tight">
            Quality Comes First
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up-delay-2 font-display tracking-wide">
            RESEARCH CHEMICALS FOR RESEARCH SCIENCE
          </p>

          <p className="text-base text-primary-foreground/70 mb-10 max-w-xl mx-auto animate-fade-up-delay-2">
            We provide only the highest quality research chemicals available, direct to you for your research needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/shop">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl">
              View Quality Assurance
            </Button>
          </div>

          {/* Quick Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-2 text-sm">
              <FlaskConical className="w-5 h-5 text-accent" />
              <span>Lab Tested</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Truck className="w-5 h-5 text-accent" />
              <span>Same-Day Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-5 h-5 text-accent" />
              <span>Research Grade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
