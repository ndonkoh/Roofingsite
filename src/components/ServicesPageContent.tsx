"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { services } from "@/lib/services-data";
import { siteConfig, getWhatsappLink } from "@/lib/site-config";

export default function ServicesPageContent() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Page intro */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 text-center animate-fade-up">
        <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-red-600 dark:text-red-500">
          <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
          WHAT WE DO
          <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
        </div>
        <h1 className="mt-4 font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span className="text-slate-900 dark:text-white">OUR </span>
          <span className="text-red-600 dark:text-red-500">SERVICES</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Complete roofing solutions for residential and commercial properties
          across Ghana — from a single repair to a full installation.
        </p>
      </div>

      {/* Detailed service sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-24 space-y-16">
        {services.map((service, i) => (
          <motion.div
            id={service.slug}
            key={service.slug}
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={`scroll-mt-28 grid gap-8 lg:grid-cols-2 items-center rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none overflow-hidden ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative h-64 lg:h-full lg:min-h-[320px] overflow-hidden group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {service.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg">
                  {service.badge}
                </span>
              )}
            </div>

            <div className="p-6 sm:p-10">
              <h2 className="font-extrabold text-2xl sm:text-3xl tracking-wide text-slate-900 dark:text-white">
                {service.title.toUpperCase()}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.fullDescription}
              </p>
              <ul className="mt-6 space-y-2.5">
                {service.features.map((feature, fi) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 1, x: -10 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.08 }}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-amber-500 dark:text-amber-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-500 hover:scale-105 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  CALL FOR A QUOTE
                </a>
                <a
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-400 hover:scale-105 transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  WHATSAPP US
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
