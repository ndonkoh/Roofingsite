"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import ThemeToggle from "@/components/ThemeToggle";

type HeaderVariant = "overlay" | "solid";

export default function Header({ variant = "overlay" }: { variant?: HeaderVariant }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = variant === "solid";

  return (
    <header
      className={
        isSolid
          ? "sticky top-0 z-30 bg-white/90 dark:bg-[#050b14]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10"
          : "absolute top-0 left-0 right-0 z-30"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt={`${siteConfig.companyName} ${siteConfig.tagline}`}
            width={861}
            height={816}
            priority
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <span className="leading-none">
            <span
              className={`block text-base sm:text-lg font-black tracking-[0.08em] ${
                isSolid ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
              }`}
            >
              {siteConfig.companyName}
            </span>
            <span
              className={`mt-1 block text-[9px] sm:text-[10px] font-bold tracking-[0.2em] ${
                isSolid ? "text-burgundy dark:text-amber-400" : "text-burgundy dark:text-amber-300"
              }`}
            >
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold tracking-wide pb-1 transition-colors ${
                  isActive
                    ? isSolid
                      ? "text-burgundy dark:text-burgundy-dark"
                      : "text-burgundy dark:text-amber-400"
                    : isSolid
                      ? "text-slate-700 dark:text-white/90 hover:text-burgundy dark:hover:text-burgundy-dark"
                      : "text-slate-900 dark:text-white/90 hover:text-burgundy dark:hover:text-amber-400"
                }`}
              >
                {item.label.toUpperCase()}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute left-0 right-0 -bottom-0 h-0.5 ${
                      isSolid
                        ? "bg-burgundy dark:bg-burgundy-dark"
                        : "bg-burgundy dark:bg-amber-400"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-md bg-burgundy px-5 py-2.5 text-sm font-bold text-white hover:bg-burgundy-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            CALL NOW
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            className="text-slate-900 dark:text-white p-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 h-screen min-h-screen w-screen overflow-y-auto bg-white dark:bg-[#050b14] md:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-white/10">
              <Image
                src="/logo.png"
                alt={`${siteConfig.companyName} ${siteConfig.tagline}`}
                width={861}
                height={816}
                className="h-12 w-12 object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                className="text-slate-900 dark:text-white p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 py-8">
              {siteConfig.nav.map((item, i) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 text-xl font-bold ${
                        isActive
                          ? "text-burgundy dark:text-burgundy-dark"
                          : "text-slate-800 dark:text-white/90 hover:text-burgundy dark:hover:text-burgundy-dark"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <a
                href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-burgundy px-5 py-3 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                CALL NOW
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
