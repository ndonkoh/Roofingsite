"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function AboutPageContent() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-red-600 dark:text-red-500">
            <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
            OUR STORY
            <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
          </div>
          <h1 className="mt-4 font-black text-4xl sm:text-5xl tracking-tight">
            <span className="text-slate-900 dark:text-white">ABOUT </span>
            <span className="text-red-600 dark:text-red-500">US</span>
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            {siteConfig.companyName} {siteConfig.tagline} has spent years
            building a reputation as one of Ghana&apos;s trusted roofing
            specialists — based in Tema and serving clients nationwide. From a
            single leak repair to a full commercial installation, every job
            gets the same standard: quality materials, honest pricing, and
            craftsmanship built to outlast the next rainy season.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
