import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import AboutPageContent from "@/components/AboutPageContent";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Freelance Roofing Systems",
  description: "Ghana's trusted roofing experts — our story, our track record, our team.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-white dark:bg-slate-950">
      <TopBar />
      <Header variant="solid" />
      <div className="pt-10">
        <AboutPageContent />
      </div>
      <StatsSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
