import { MessageCircle, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { getWhatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center bg-[#f7f3eb] dark:bg-slate-950">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/photos/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3eb]/70 via-[#f7f3eb]/35 to-[#f7f3eb]/0 dark:from-slate-950/90 dark:via-blue-950/70 dark:to-blue-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3eb]/20 via-transparent to-white/0 dark:from-slate-950/70 dark:via-transparent dark:to-blue-950/40" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold text-amber-200 mb-6 shadow-lg shadow-red-900/15"
            style={{ animationDelay: "0s" }}
          >
            <MapPin className="h-3.5 w-3.5" />
            Ghana&apos;s Premier Roofing Specialists
          </div>

          <h1 className="font-black leading-[0.9] tracking-tight">
            <span
              className="animate-fade-up block text-lg sm:text-xl lg:text-2xl font-extrabold tracking-[0.28em] text-slate-700 dark:text-slate-200"
              style={{ animationDelay: "0.1s" }}
            >
              BUILT TO
            </span>
            <span
              className="animate-fade-up mt-2 block text-6xl sm:text-7xl lg:text-8xl text-red-600 dark:text-red-500"
              style={{ animationDelay: "0.2s" }}
            >
              LAST.
            </span>
            <span
              className="animate-fade-up block text-5xl sm:text-6xl lg:text-7xl text-amber-500 dark:text-amber-400"
              style={{ animationDelay: "0.3s" }}
            >
              LAST
            </span>
            <span
              className="animate-fade-up mt-3 block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.08em] text-slate-800 dark:text-slate-200"
              style={{ animationDelay: "0.4s" }}
            >
              FOREVER.
            </span>
          </h1>

          <p
            className="animate-fade-up mt-4 max-w-lg text-slate-700 dark:text-slate-200/90 text-base sm:text-lg leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Expert roofing sales, installation &amp; repairs across Tema and all of
            Ghana. Durable quality. Affordable prices. Always open.
          </p>

          <ul
            className="animate-fade-up mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-amber-700 dark:text-amber-300"
            style={{ animationDelay: "0.6s" }}
          >
            {["Durable Quality", "Affordable Prices", "Residential & Commercial"].map(
              (item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  {item}
                </li>
              )
            )}
          </ul>

          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.7s" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-500 hover:scale-105 transition-all"
            >
              CONTACT FORM
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border-2 border-amber-500 px-6 py-3 text-sm font-bold text-amber-700 dark:text-amber-400 hover:bg-amber-400 hover:text-slate-950 hover:scale-105 transition-all"
            >
              OUR SERVICES
            </Link>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-400 hover:scale-105 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
