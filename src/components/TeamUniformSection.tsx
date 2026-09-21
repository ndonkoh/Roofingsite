"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function TeamUniformSection() {
  return (
    <section className="bg-white dark:bg-[#050b14] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-burgundy dark:text-burgundy-dark">
            <span className="h-px w-8 bg-burgundy/60 dark:bg-burgundy-dark/60" />
              KNOW WHO YOU&apos;RE WORKING WITH
          </div>
          <h2 className="mt-4 font-black text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            <span className="block text-slate-900 dark:text-white">EASY TO</span>
              <span className="block text-burgundy dark:text-burgundy-dark">RECOGNIZE.</span>
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Every {siteConfig.companyName} {siteConfig.tagline} crew member wears
            branded uniform on site — so you always know it&apos;s our team on
            your roof, not someone claiming to be. No guesswork, no unmarked
            strangers, just a professional crew you can identify at a glance.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0b1624]/60 p-5 max-w-xl">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-burgundy/10 dark:bg-burgundy/15 text-burgundy dark:text-burgundy-dark">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              If someone shows up claiming to be from{" "}
              {siteConfig.companyName} without our uniform, call us directly
              to confirm before letting them on site.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2 relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/photos/team-uniform.jpg"
            alt={`${siteConfig.companyName} branded team uniform`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
