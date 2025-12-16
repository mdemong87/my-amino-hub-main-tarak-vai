import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { QualityAssurance } from "@/components/sections/QualityAssurance";
import { AgeVerificationModal } from "@/components/modals/AgeVerificationModal";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AgeVerificationModal />
      <AnnouncementBar />
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <ProductsGrid 
          title="Most Popular" 
          subtitle="Our best-selling research compounds trusted by researchers worldwide"
        />
        <CategoryTabs />
        <ProductsGrid 
          title="Best Selling Products" 
          subtitle="Join thousands of satisfied researchers"
          showAll 
        />
        <TrustBadges />
        <QualityAssurance />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
