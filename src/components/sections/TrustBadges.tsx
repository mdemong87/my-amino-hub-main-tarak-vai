import { FlaskConical, Truck, Shield, Headphones } from "lucide-react";

const badges = [
  {
    icon: FlaskConical,
    number: "01",
    title: "Lab Tested",
    description:
      "Our products undergo rigorous third-party testing to ensure exceptional safety, purity, and quality. Each batch comes with a Certificate of Analysis (COA).",
  },
  {
    icon: Truck,
    number: "02",
    title: "Fast Shipping",
    description:
      "Same-Day Shipping Monday through Friday when you order before 12 PM CST. We take pride in our fast, reliable shipping to ensure your order arrives without delay.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Research Grade",
    description:
      "We provide only the highest quality research chemicals available. No room for error in conducting high quality research.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Quality Support",
    description:
      "Our dedicated customer service team is available Monday through Friday to ensure your needs are handled quickly and efficiently.",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="trust-badge group hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-xs font-bold text-accent mb-3">{badge.number}</span>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <badge.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">
                {badge.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
