import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Freelance Roofing Systems",
  description: "Get a free roofing quote — call, WhatsApp, or send us a message.",
};

export default function ContactPage() {
  return (
      <main className="relative bg-white dark:bg-[#050b14]">
      <TopBar />
      <Header variant="solid" />
      <div className="pt-10">
        <ContactPageContent />
      </div>
      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
