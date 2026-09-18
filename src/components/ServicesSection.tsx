"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#fbfaf7] dark:bg-slate-950 py-20 sm:py-28 [background-image:linear-gradient(to_right,rgba(180,83,9,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(180,83,9,0.07)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-red-600 dark:text-red-500">
            <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
            WHAT WE DO
            <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
          </div>
          <h2 className="mt-4 font-black text-4xl sm:text-5xl tracking-tight">
            <span className="text-slate-900 dark:text-white">OUR </span>
            <span className="text-red-600 dark:text-red-500">SERVICES</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Complete roofing solutions for residential and commercial properties
            across Ghana.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-amber-900/10 dark:border-white/10 bg-white dark:bg-slate-900/60 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.45)] dark:shadow-none hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                {service.badge && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                    className="absolute top-4 right-4 rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg"
                  >
                    {service.badge}
                  </motion.span>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-extrabold text-lg tracking-wide text-slate-900 dark:text-white">
                  {service.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red-600 dark:text-red-500"
                >
                  LEARN MORE
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-md bg-red-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-red-500 transition-colors"
          >
            VIEW ALL SERVICES
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
