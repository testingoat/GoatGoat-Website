import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CustomerSection } from "@/components/sections/CustomerSection";
import { SellerSection } from "@/components/sections/SellerSection";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DownloadSection } from "@/components/DownloadSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-emerald-500/30 selection:text-emerald-200">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <HowItWorks />
        <CustomerSection />
        <SellerSection />
        <DeliverySection />
        <TechnologySection />
        <DownloadSection
          apps={[
            {
              role: "Customer",
              title: "Customer App",
              description:
                "Shop groceries with live maps, voice search, and real-time order updates.",
              ios: { url: "#" },
              android: { url: "#" },
            },
            {
              role: "Seller",
              title: "Seller App",
              description:
                "Manage catalog, orders, and performance metrics from a single dashboard.",
              ios: { url: "#" },
              android: { url: "#" },
            },
            {
              role: "Delivery",
              title: "Delivery Agent App",
              description:
                "Accept tasks, navigate optimised routes, and track earnings in real time.",
              ios: { url: "#" },
              android: { url: "#" },
            },
          ]}
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
