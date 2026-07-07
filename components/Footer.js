import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/15 px-6 py-8 dark:border-fog/15">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-fog/50 sm:flex-row">
        <p>© {year} {profile.name}</p>
        <a href="#home" className="underline-grow">
          Kembali ke atas
        </a>
      </div>
    </footer>
  );
}
