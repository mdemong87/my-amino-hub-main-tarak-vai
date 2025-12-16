import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Third-party multi-vial batch testing",
  "Certificate of Analysis (COA) for every batch",
  "Verified purity and potency",
  "Transparent testing protocols",
  "Research-grade quality standards",
];

export const QualityAssurance = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Commitment
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Helix Research Quality Assurance Program
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're proud to introduce our Quality Assurance Program — our commitment to
              delivering unmatched quality, purity, and consistency across every research
              product. This program reflects our dedication to transparency and
              excellence.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="group">
              View Quality Assurance Page
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl helix-gradient p-1">
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-12 h-12 text-accent"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    100% Verified
                  </h3>
                  <p className="text-muted-foreground">
                    Every batch tested for purity & quality
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-helix-teal/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
