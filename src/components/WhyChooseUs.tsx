"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Clock, HardHat, MapPin, Wrench, Award } from "lucide-react";
import { whyChooseUs } from "@/lib/stats-data";
import { siteConfig } from "@/lib/site-config";

const icons = [ShieldCheck, DollarSign, Clock, HardHat, MapPin, Wrench];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f1ede4] dark:bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="relative rounded-2xl"
        >
          <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/photos/team.jpg"
              alt="Freelance Roofing Systems team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute top-5 right-5 rounded-xl bg-amber-400 px-5 py-3 text-slate-950 shadow-lg">
            <div className="font-black text-2xl leading-none">500+</div>
            <div className="text-[11px] font-semibold tracking-wide">ROOFS INSTALLED</div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 bg-slate-950/85 px-5 py-4 rounded-b-2xl">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-600">
              <Award className="h-5 w-5 text-white" />
            </span>
            <div>
              <div className="font-bold text-white text-sm">Ghana&apos;s Trusted</div>
              <div className="text-xs text-slate-400">Roofing Specialists Since Day One</div>
            </div>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-red-500">
            <span className="h-px w-8 bg-red-500/60" />
            WHY CHOOSE US
          </div>
          <h2 className="mt-4 font-black text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            <span className="block text-slate-900 dark:text-white">YOUR ROOF.</span>
            <span className="block text-red-500">OUR PRIDE.</span>
          </h2>
          <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            At {siteConfig.companyName} {siteConfig.tagline}, every project is
            personal. We treat your home or business like our own — bringing expert
            craftsmanship, quality materials, and honest pricing to every single job
            across Ghana.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-600/15 text-red-500">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
