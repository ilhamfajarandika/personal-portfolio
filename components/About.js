import { aboutParagraph, pullQuote } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue dark:text-blue-glow">
          01 — Tentang
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-h2 font-bold uppercase leading-none text-ink dark:text-fog">
          Sedikit tentang saya
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-12">
        {/* Paragraf editorial: diapit garis vertikal tipis, lebar baris optimal */}
        <Reveal delay={0.1} className="md:col-span-7">
          <div className="flex gap-6 border-l border-r border-ink/15 px-6 py-2 dark:border-fog/15 md:gap-10 md:px-10">
            <p className="drop-cap max-w-[60ch] font-body text-lg leading-relaxed text-ink/85 dark:text-fog/85">
              {aboutParagraph}
            </p>
          </div>
        </Reveal>

        {/* Pull quote besar, ditempatkan asimetris di kolom sempit */}
        <Reveal delay={0.2} className="md:col-span-5 md:mt-10">
          <blockquote className="pull-quote font-serif text-2xl italic leading-snug text-ink dark:text-fog sm:text-3xl">
            {pullQuote}
          </blockquote>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-fog/50">
            — Martin Fowler, Refactoring (1999)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
