import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function TopBar() {
  return (
    <div className="w-full bg-red-600 text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {siteConfig.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {phone}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/90">
          <span className="hidden sm:inline">|</span>
          <span>{siteConfig.serviceArea}</span>
          <span className="hidden sm:inline">|</span>
          <span className="font-semibold text-amber-300">{siteConfig.hours}</span>
        </div>
      </div>
    </div>
  );
}
