// Central place to update contact details, social links, and brand info.
// Swap these placeholders for the real company details whenever you're ready.

export const siteConfig = {
  companyName: "FREELANCE",
  tagline: "ROOFING SYSTEMS",
  phones: ["+233 55 935 4548", "+233 20 174 6317"],
  email: "adiabosaviour761@gmail.com",
  // Formspree form ID for the contact form (from https://formspree.io/f/xzeblplo)
  formspreeFormId: "xzeblplo",
  serviceArea: "Tema & Nationwide Services",
  hours: "Always Open 24/7",
  whatsappNumber: "233559354548", // digits only, no + or spaces
  whatsappDefaultMessage: "Hi, I'd like a roofing quote",
  social: {
    facebook: "https://facebook.com/freelanceroofingsystems",
    tiktok: "https://tiktok.com/@freelanceroofingsystems",
    whatsapp: "", // computed in getWhatsappLink()
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export function getWhatsappLink() {
  const message = encodeURIComponent(siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
