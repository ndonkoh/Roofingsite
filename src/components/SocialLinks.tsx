import { siteConfig, getWhatsappLink } from "@/lib/site-config";

// Inline glyphs since lucide-react's icon set doesn't include brand logos
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82c-1.02-.9-1.62-2.13-1.68-3.5h-3.14v13.6a2.6 2.6 0 1 1-1.84-2.49v-3.2a5.8 5.8 0 1 0 5 5.75V9.4a7.06 7.06 0 0 0 4.1 1.3V7.56a3.9 3.9 0 0 1-2.44-1.74Z" />
    </svg>
  );
}

export default function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
    { label: "TikTok", href: siteConfig.social.tiktok, Icon: TikTokIcon },
    { label: "WhatsApp", href: getWhatsappLink(), Icon: null },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-amber-400 hover:text-slate-950 hover:scale-110 transition-all"
        >
          {Icon ? <Icon className="h-5 w-5" /> : <span className="text-sm font-bold">W</span>}
        </a>
      ))}
    </div>
  );
}
