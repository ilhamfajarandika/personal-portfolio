"use client";

import { profile } from "@/lib/data";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { label: "Tentang", href: "#about", n: "01" },
  { label: "Karya", href: "#projects", n: "02" },
  { label: "Kontak", href: "#contact", n: "03" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-sm dark:border-fog/10 dark:bg-void/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-xs uppercase tracking-widest">
        <a href="#home" className="font-display text-sm normal-case tracking-normal">
          {profile.name}
        </a>

        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="underline-grow">
                <span className="mr-1 text-blue dark:text-blue-glow">{link.n}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <DarkModeToggle />
      </nav>
    </header>
  );
}
