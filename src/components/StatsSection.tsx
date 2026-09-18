"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/stats-data";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/photos/stats-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-red-500">
            <span className="h-px w-8 bg-red-500/60" />
            OUR TRACK RECORD
            <span className="h-px w-8 bg-red-500/60" />
          </div>
          <h2 className="mt-4 font-black text-4xl sm:text-5xl tracking-tight">
            <span className="text-white">NUMBERS THAT </span>
            <span className="text-amber-400">SPEAK</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`rounded-lg bg-slate-950/80 px-4 py-8 text-center border ${
                stat.highlighted ? "border-amber-400" : "border-white/10"
              }`}
            >
              <div className="font-black text-3xl sm:text-4xl text-amber-400">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="mt-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-300 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
