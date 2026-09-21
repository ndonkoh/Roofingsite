import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import GalleryPageContent from "@/components/GalleryPageContent";

export const metadata: Metadata = {
  title: "Project Gallery | Freelance Roofing Systems",
  description:
    "Browse completed residential, commercial, and estate roofing projects across Ghana.",
};

export default function GalleryPage() {
  return (
      <main className="relative bg-white dark:bg-[#050b14]">
      <TopBar />
      <Header variant="solid" />
      <div className="pt-10">
        <GalleryPageContent />
      </div>
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
