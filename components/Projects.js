"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue dark:text-blue-glow">
          02 — Karya
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-h2 font-bold uppercase leading-none text-ink dark:text-fog">
          Katalog proyek
        </h2>
      </Reveal>

      <div className="mt-16 border-t border-ink/15 dark:border-fog/15">
        {projects.map((project, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={project.title} delay={0.05 + i * 0.05}>
              <article
                className={`border-b border-ink/15 py-8 dark:border-fog/15 ${
                  project.wide ? "" : "md:pl-16"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[3rem_1fr_auto] items-baseline gap-4 text-left"
                >
                  <span className="font-mono text-sm text-ink/40 dark:text-fog/40">
                    {project.index}
                  </span>
                  <span
                    className={`underline-grow font-display font-bold uppercase leading-none transition-colors ${
                      isOpen
                        ? "text-blue dark:text-blue-glow"
                        : "text-ink dark:text-fog"
                    }`}
                    style={{ fontSize: "clamp(1.6rem, 5vw, 3.2rem)" }}
                  >
                    {project.title}
                  </span>
                  <span className="font-mono text-xs text-ink/40 dark:text-fog/40">
                    {project.year}
                  </span>
                </button>

                {/* Deskripsi: dianimasikan lewat trik CSS grid-template-rows 0fr -> 1fr */}
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <div className="ml-16 mt-5 max-w-[60ch] pr-6">
                      <p className="font-body text-base leading-relaxed text-ink/75 dark:text-fog/75">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs uppercase tracking-wider text-blue dark:text-blue-glow"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
