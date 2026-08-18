import HeroSection from "@/components/home/HeroSection";
import ValueProps from "@/components/home/ValueProps";
import CategoryGrid from "@/components/home/CategoryGrid";
import TShirtStepsSection from "@/components/home/TShirtStepsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTA from "@/components/home/CTA";
import TrustedCompaniesSection from "@/components/home/TrustedCompaniesSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValueProps />
      <CategoryGrid />
      <FeaturedProducts />
      <TShirtStepsSection />
      <FeaturesSection />
      <CTA />
      <TrustedCompaniesSection />
      <PricingSection />
      <TestimonialsSection />
    </main>
  );
}
