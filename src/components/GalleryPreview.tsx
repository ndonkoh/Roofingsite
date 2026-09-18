"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";
import { galleryProjects } from "@/lib/gallery-data";
import GalleryLightbox from "@/components/GalleryLightbox";

const preview = galleryProjects.slice(0, 4);

function ProjectCard({
  project,
  className = "",
  priority = false,
  onClick,
}: {
  project: (typeof preview)[number];
  className?: string;
  priority?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl text-left cursor-zoom-in ${className}`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, 100vw"
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
  );
}

export default function GalleryPreview() {
  const [featured, commercial, villa, estate] = preview;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#fbfaf7] dark:bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-red-600 dark:text-red-500">
              <span className="h-px w-8 bg-red-600/60 dark:bg-red-500/60" />
              OUR WORK
            </div>
            <h2 className="mt-4 font-black text-4xl sm:text-5xl tracking-tight">
              <span className="text-slate-900 dark:text-white">PROJECT </span>
              <span className="text-red-600 dark:text-red-500">GALLERY</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:h-[560px]"
        >
          <ProjectCard
            project={featured}
            priority
            className="h-72 lg:h-full lg:row-span-2"
            onClick={() => setOpenIndex(0)}
          />
          <ProjectCard
            project={commercial}
            className="h-56 lg:h-full"
            onClick={() => setOpenIndex(1)}
          />
          <ProjectCard
            project={villa}
            className="h-56 lg:h-full"
            onClick={() => setOpenIndex(2)}
          />
          <ProjectCard
            project={estate}
            className="h-56 lg:h-full lg:col-span-2"
            onClick={() => setOpenIndex(3)}
          />
        </motion.div>
      </div>

      <GalleryLightbox
        projects={preview}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
