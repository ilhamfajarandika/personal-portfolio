"use client";

import { useEffect, useRef, useState } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/-";

// Efek "scramble": karakter acak berganti-ganti sebelum menetap
// jadi teks aslinya, dibaca dari kiri ke kanan secara bertahap.
export default function ScrambleText({ text, className = "", speed = 30 }) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion.current) {
      setDisplay(text);
      return;
    }

    const totalFrames = text.length * 3;
    frame.current = 0;

    const interval = setInterval(() => {
      frame.current += 1;
      const revealCount = Math.floor(
        (frame.current / totalFrames) * text.length
      );

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        })
        .join("");

      setDisplay(next);

      if (revealCount >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{display}</span>;
}
