export type GalleryProject = {
  title: string;
  category: string;
  location: string;
  image: string;
  featured?: boolean;
};

export const galleryProjects: GalleryProject[] = [
  {
    title: "Luxury Residence",
    category: "Residential",
    location: "East Legon, Accra",
    image: "/photos/gallery-luxury-residence.jpg",
    featured: true,
  },
  {
    title: "Commercial Complex",
    category: "Commercial",
    location: "Tema Industrial",
    image: "/photos/gallery-commercial-complex.jpg",
  },
  {
    title: "Modern Villa",
    category: "Residential",
    location: "Trasacco Valley, Accra",
    image: "/photos/gallery-modern-villa.jpg",
  },
  {
    title: "Housing Estate",
    category: "Estate Project",
    location: "Tema, Ghana",
    image: "/photos/gallery-housing-estate.jpg",
  },
  {
    title: "Coastal Bungalow",
    category: "Residential",
    location: "Cape Coast",
    image: "/photos/gallery-coastal-bungalow.jpg",
  },
  {
    title: "Office Retrofit",
    category: "Commercial",
    location: "Airport City, Accra",
    image: "/photos/gallery-office-retrofit.jpg",
  },
  {
    title: "Contemporary Roof Design",
    category: "Residential",
    location: "Tema, Ghana",
    image: "/photos/gallery-contemporary-roof.jpg",
  },
  {
    title: "New Build Roofing",
    category: "Residential",
    location: "Greater Accra",
    image: "/photos/gallery-new-build.jpg",
  },
  {
    title: "Two-Story Residence",
    category: "Residential",
    location: "Tema, Ghana",
    image: "/photos/gallery-two-story-residence.jpg",
  },
  {
    title: "Custom Roof Feature",
    category: "Residential",
    location: "Greater Accra",
    image: "/photos/gallery-custom-roof-feature.jpg",
  },
  {
    title: "Finished Red Roof",
    category: "Residential",
    location: "Tema, Ghana",
    image: "/photos/gallery-finished-red-roof.jpg",
  },
  {
    title: "Commercial Roofing Project",
    category: "Commercial",
    location: "Greater Accra",
    image: "/photos/gallery-commercial-project.jpg",
  },
];
