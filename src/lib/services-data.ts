// Shared service data — used by the homepage teaser grid and the full /services page.
// Swap in real photos and copy whenever you have them.

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  badge?: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "roof-installation",
    title: "Roof Installation",
    shortDescription:
      "Expert installation of all roofing types — metal sheets, clay tiles, stone-coated, and more. Precision fitting, sealed and secured for decades of protection.",
    fullDescription:
      "From the first sheet to the final ridge cap, our installation crews handle every roofing material in use across Ghana. We measure, fit, and seal each job to a standard built for decades of harsh sun and heavy rain, not just the next dry season.",
    image: "/photos/service-installation.jpg",
    badge: "Most Popular",
    features: [
      "Metal sheets, clay tiles & stone-coated options",
      "Precision fitting and sealing",
      "Built for Ghana's rainy season",
    ],
  },
  {
    slug: "roof-repairs",
    title: "Roof Repairs",
    shortDescription:
      "Fast, reliable repairs for leaks, damaged tiles, rusted sheets, and structural issues. We diagnose and fix it right the first time.",
    fullDescription:
      "A small leak rarely stays small. Our repair teams inspect the full roof structure, not just the visible damage, so a patched leak doesn't reappear two roofs over. We fix rust, cracked tiles, and structural sag with the same care as a full install.",
    image: "/photos/service-repairs.jpg",
    features: [
      "Leak diagnosis and repair",
      "Damaged tile and rusted sheet replacement",
      "Structural issue assessment",
    ],
  },
  {
    slug: "roofing-sales",
    title: "Roofing Sales",
    shortDescription:
      "Premium quality roofing materials at competitive prices. Metal sheets, stone-coated tiles, and accessories — in your choice of colour.",
    fullDescription:
      "Buying materials on their own? We stock metal sheets, stone-coated tiles, and the fittings and accessories that go with them, in a range of colours, at prices that make sense for both single-home and commercial-scale orders.",
    image: "/photos/service-sales.jpg",
    features: [
      "Metal sheets and stone-coated tiles",
      "Full range of accessories",
      "Competitive pricing for bulk orders",
    ],
  },
  {
    slug: "hidden-roofing",
    title: "Hidden Roofing",
    shortDescription:
      "Sleek parapet-style roofing with the gutter and drainage built in and out of sight, for a clean, modern roofline with no visible gutter or downpipe.",
    fullDescription:
      "Hidden roofing tucks the drainage system behind a parapet wall instead of an exposed gutter, giving the building a clean, uninterrupted roofline while still channelling heavy rain safely away. It's a popular choice for modern commercial and residential builds across Ghana that want the drainage handled without it being on show.",
    image: "/photos/service-hidden-roofing.jpg",
    features: [
      "Concealed box gutter behind a parapet wall",
      "Clean, modern roofline with no visible gutter",
      "Built to handle Ghana's heavy seasonal rainfall",
    ],
  },
];
