"use client";

import { useEffect, useRef, useState } from "react";

// Versi kecil dari AsciiField, khusus mengorbit di belakang foto.
// Memakai class `.ascii-char` yang sama (sudah `position: absolute`),
// jadi otomatis mengikuti ukuran wrapper `.photo-ascii-orbit`.
const CHARS = "01<>/\\|{}[]#%&*+=~^$@!?_-".split("");
const COUNT = 14;
const TICK_MS = 700;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function randomParticle(id) {
  return {
    id,
    char: randomChar(),
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 9 + Math.random() * 10,
    accent: Math.random() < 0.18,
    opacity: 0.12 + Math.random() * 0.18,
  };
}

export default function PhotoAsciiOrbit() {
  const [particles, setParticles] = useState([]);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setParticles(Array.from({ length: COUNT }, (_, i) => randomParticle(i)));

    if (reducedMotion.current) return;

    const interval = setInterval(() => {
      setParticles((prev) => {
        const next = [...prev];
        const howMany = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < howMany; i++) {
          const idx = Math.floor(Math.random() * next.length);
          next[idx] = randomParticle(next[idx].id);
        }
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="photo-ascii-orbit" aria-hidden="true">
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
