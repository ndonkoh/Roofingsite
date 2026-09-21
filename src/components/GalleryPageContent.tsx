"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { galleryProjects } from "@/lib/gallery-data";
import GalleryLightbox from "@/components/GalleryLightbox";

export default function GalleryPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-[#050b14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 text-center animate-fade-up">
        <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-burgundy dark:text-burgundy-dark">
          <span className="h-px w-8 bg-burgundy/60 dark:bg-burgundy-dark/60" />
          OUR WORK
          <span className="h-px w-8 bg-burgundy/60 dark:bg-burgundy-dark/60" />
        </div>
        <h1 className="mt-4 font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          <span className="text-slate-900 dark:text-white">PROJECT </span>
          <span className="text-burgundy dark:text-burgundy-dark">GALLERY</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          A look at completed residential, commercial, and estate roofing
          projects across Ghana. Click any photo for a closer look.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryProjects.map((project, i) => (
            <button
              key={project.title}
              onClick={() => setOpenIndex(i)}
              style={{ animationDelay: `${Math.min(i, 5) * 0.06}s` }}
              className="animate-fade-up group relative h-72 overflow-hidden rounded-xl text-left cursor-zoom-in"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={i < 3}
                loading={i < 3 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/60 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Expand className="h-4 w-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-[11px] font-bold tracking-wide text-amber-400 uppercase">
                  {project.category}
                </span>
                <h3 className="mt-1 font-bold text-white text-lg">{project.title}</h3>
                <p className="text-sm text-slate-400">{project.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <GalleryLightbox
        projects={galleryProjects}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}
