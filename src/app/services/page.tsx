import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services | Freelance Roofing Systems",
  description:
    "Roof installation, repairs, roofing sales, and hidden roofing across Tema and Ghana.",
};

export default function ServicesPage() {
  return (
      <main className="relative bg-white dark:bg-[#050b14]">
      <TopBar />
      <Header variant="solid" />
      <div className="pt-10">
        <ServicesPageContent />
      </div>
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
