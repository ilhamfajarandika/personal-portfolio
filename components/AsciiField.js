"use client";

import { useEffect, useRef, useState } from "react";

// Kumpulan karakter ASCII yang dipakai — nuansa "kode/terminal"
const CHARS = "01<>/\\|{}[]#%&*+=~^$@!?_-".split("");
const PARTICLE_COUNT = 26;
const TICK_MS = 900; // seberapa sering sekelompok karakter berpindah
const MAX_MOVE_PER_TICK = 4; // jumlah karakter yang diacak per interval

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function randomParticle(id) {
  return {
    id,
    char: randomChar(),
    top: Math.random() * 92, // dalam persen (%)
    left: Math.random() * 92,
    size: 14 + Math.random() * 26, // px
    accent: Math.random() < 0.15, // ~15% jadi warna magenta
    opacity: 0.05 + Math.random() * 0.07,
  };
}

export default function AsciiField() {
  const [particles, setParticles] = useState([]);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setParticles(
      Array.from({ length: PARTICLE_COUNT }, (_, i) => randomParticle(i)),
    );

    if (reducedMotion.current) return; // statis, tidak ada interval

    const interval = setInterval(() => {
      setParticles((prev) => {
        const next = [...prev];
        const howMany = 1 + Math.floor(Math.random() * MAX_MOVE_PER_TICK);

        for (let i = 0; i < howMany; i++) {
          const idx = Math.floor(Math.random() * next.length);
          next[idx] = { ...randomParticle(next[idx].id) };
        }
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="type-field" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`ascii-char${p.accent ? " accent" : ""}`}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
