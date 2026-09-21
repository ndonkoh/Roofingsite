import { Mail, MessageCircle, CheckCircle2, MapPin } from "lucide-react";
import { siteConfig, getWhatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/photos/hero.jpg')",
        }}
      />

      {/* Blue-toned scrim instead of plain black, darker on the left for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/40 to-white/15 dark:from-[#050b14]/90 dark:via-[#050b14]/70 dark:to-[#050b14]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-white/20 dark:from-[#050b14]/70 dark:via-transparent dark:to-[#050b14]/40" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-burgundy/90 px-4 py-1.5 text-xs font-bold text-white mb-6"
            style={{ animationDelay: "0s" }}
          >
            <MapPin className="h-3.5 w-3.5" />
            Ghana&apos;s Premier Roofing Specialists
          </div>

          <h1 className="font-black leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl">
            <span
              className="animate-fade-up block text-slate-900 dark:text-white"
              style={{ animationDelay: "0.1s" }}
            >
              BUILT ON
            </span>
            <span
              className="animate-fade-up block text-burgundy dark:text-burgundy-dark"
              style={{ animationDelay: "0.2s" }}
            >
              TRUST,
            </span>
            <span
              className="animate-fade-up block text-amber-600 dark:text-amber-400"
              style={{ animationDelay: "0.3s" }}
            >
              BACKED BY
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 text-3xl sm:text-4xl font-extrabold text-slate-700 dark:text-slate-200 tracking-wide"
            style={{ animationDelay: "0.4s" }}
          >
            QUALITY.
          </p>

          <p
            className="animate-fade-up mt-4 max-w-lg text-slate-700 dark:text-slate-200/90 text-base sm:text-lg leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Expert roofing sales, installation &amp; repairs across Tema and all of
            Ghana. Durable quality. Affordable prices. Always open.
          </p>

          <ul
            className="animate-fade-up mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
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
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-burgundy px-6 py-3 text-sm font-bold text-white hover:bg-burgundy-dark hover:scale-105 transition-all"
            >
              <Mail className="h-4 w-4" />
              CONTACT FORM
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border-2 border-slate-900 dark:border-white px-6 py-3 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 hover:scale-105 transition-all"
            >
              OUR SERVICES
            </a>
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
