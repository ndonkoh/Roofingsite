import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { quickLinks } from "@/lib/footer-data";
import { services } from "@/lib/services-data";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#050b14] border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${siteConfig.companyName} ${siteConfig.tagline}`}
              width={861}
              height={816}
              className="h-12 w-12 object-contain"
            />
            <span className="leading-tight">
              <span className="block font-extrabold tracking-tight text-slate-900 dark:text-white text-sm">
                {siteConfig.companyName}
              </span>
              <span className="block text-[10px] font-semibold tracking-widest text-amber-600 dark:text-amber-400">
                {siteConfig.tagline}
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Ghana&apos;s trusted roofing experts. Quality materials, expert
            installation, unmatched craftsmanship — serving Tema and nationwide
            since day one.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        {/* Services */}
        <div>
          <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm tracking-wide">
            <span className="h-px w-5 bg-burgundy dark:bg-burgundy-dark" />
            SERVICES
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span className="text-burgundy dark:text-burgundy-dark">&rarr;</span>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm tracking-wide">
            <span className="h-px w-5 bg-burgundy dark:bg-burgundy-dark" />
            QUICK LINKS
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span className="text-burgundy dark:text-burgundy-dark">&rarr;</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm tracking-wide">
            <span className="h-px w-5 bg-burgundy dark:bg-burgundy-dark" />
            CONTACT
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-burgundy dark:text-burgundy-dark" />
              <span>
                Tema, Greater Accra, Ghana
                <br />
                Nationwide Services Available
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-burgundy dark:text-burgundy-dark" />
              <span>
                {siteConfig.phones.map((phone) => (
                  <span key={phone} className="block">
                    {phone}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-burgundy dark:text-burgundy-dark" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-burgundy dark:text-burgundy-dark" />
              <span>
                <span className="block font-semibold text-amber-600 dark:text-amber-400">
                  {siteConfig.hours}
                </span>
                <span className="text-slate-600 dark:text-slate-400">24/7 — 365 Days a Year</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-500">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.companyName}{" "}
            {siteConfig.tagline}. All rights reserved.
          </span>
          <span>GH Proudly Ghanaian — Tema &amp; Nationwide</span>
        </div>
      </div>
    </footer>
  );
}
