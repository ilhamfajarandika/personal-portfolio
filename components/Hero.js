"use client";

import { profile } from "@/lib/data";
import ScrambleText from "./ScrambleText";
import PhotoAsciiOrbit from "./PhotoAsciiOrbit";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue dark:text-blue-glow">
        Personal Portfolio — 2026
      </p>

      <div className="mt-4 flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="min-w-0 flex-1 font-display text-giant font-extrabold uppercase leading-[0.85] tracking-tight text-ink dark:text-fog">
          {profile.name}
        </h1>

        {/* Foto: bingkai membulat + crop-mark + orbit ASCII */}
        <div className="relative h-52 w-52 shrink-0 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
          {" "}
          <PhotoAsciiOrbit />
          <div className="photo-frame h-full w-full">
            <img src="/foto-profil.jpg" alt={profile.name} />
          </div>
          <span className="crop-mark crop-mark-tl" />
          <span className="crop-mark crop-mark-tr" />
          <span className="crop-mark crop-mark-bl" />
          <span className="crop-mark crop-mark-br" />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:ml-auto sm:max-w-md sm:text-right">
        <ScrambleText
          text={profile.role}
          className="font-mono text-sm uppercase tracking-[0.2em] text-ink/70 dark:text-fog/70"
        />
        <p className="font-serif text-xl italic text-ink/80 dark:text-fog/80">
          {profile.subheading}
        </p>
      </div>

      <a
        href="#about"
        className="mt-20 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink/50 transition-colors hover:text-blue dark:text-fog/50 dark:hover:text-blue-glow"
      >
        <span className="h-px w-10 bg-current" />
        Gulir
      </a>
    </section>
  );
}
