"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { siteConfig, getWhatsappLink } from "@/lib/site-config";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-red-600 py-20 sm:py-28">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 2px, transparent 40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-white/80">
            <span className="h-px w-8 bg-white/50" />
            READY TO START?
            <span className="h-px w-8 bg-white/50" />
          </div>
          <h2 className="mt-4 font-black text-white leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            GET A FREE
            <br />
            QUOTE TODAY
          </h2>
          <p className="mt-6 text-white/90 leading-relaxed max-w-xl mx-auto">
            Call or WhatsApp us now. We&apos;ll visit your site, assess your
            needs, and give you an honest, competitive quote — completely
            free.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-bold text-red-600 hover:bg-slate-100 hover:scale-105 transition-all"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phones[0]}
            </a>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-400 hover:scale-105 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WHATSAPP NOW
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md border-2 border-white px-6 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-red-600 hover:scale-105 transition-all"
            >
              CONTACT FORM
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-white/80">
            <MapPin className="h-3.5 w-3.5" />
            Tema, Ghana &middot; {siteConfig.serviceArea.replace("Tema & ", "")} &middot;{" "}
            {siteConfig.hours}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
