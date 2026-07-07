import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue dark:text-blue-glow">
          03 — Kontak
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-h2 font-bold uppercase leading-none text-ink dark:text-fog">
          Hubungi saya
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <a
          href={`mailto:${profile.email}`}
          className="underline-grow mt-12 block break-all font-display font-bold text-ink dark:text-fog"
          style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
          {profile.socials.map((social) => (
            <a
              target="_blank"
              key={social.label}
              href={social.href}
              className="underline-grow font-mono text-sm uppercase tracking-widest text-ink/70 hover:text-blue dark:text-fog/70 dark:hover:text-blue-glow"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
