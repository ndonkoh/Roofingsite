import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GalleryPreview from "@/components/GalleryPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="relative">
      <TopBar />
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <GalleryPreview />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
