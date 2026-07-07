# Portofolio "Typography-Driven" — Next.js + Tailwind + Framer Motion

Terinspirasi Swiss Design & editorial modern: tipografi sebagai elemen visual utama,
bukan pelengkap.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Personalisasi

Semua konten ada di **`lib/data.js`**. Warna, font, dan ukuran huruf (`giant`, `display`, `h2`)
ada di `tailwind.config.js`. Animasi & utilitas CSS kustom ada di `styles/typography.css`.

## Penjelasan komponen & penerapan prinsip Typography-Driven

### `Navbar.js`
Sengaja dibuat minim: hanya nama (font display kecil) dan tiga link bernomor ala daftar isi
majalah (`01 Tentang`, `02 Karya`, `03 Kontak`). Nomor diberi warna aksen biru untuk
membangun ritme visual tanpa ikon atau dekorasi tambahan.

### `Hero.js`
Nama ditulis dalam ukuran **`clamp(3.2rem, 10vw, 11rem)`** (class `text-giant`) — inilah
"gambar" satu-satunya di hero, karena tipografi sendiri yang jadi elemen visual utama.
Subheading peran (`FULL-STACK DEVELOPER`) memakai `ScrambleText`: karakter acak berganti
sebelum menetap ke teks asli, dibaca dari kiri ke kanan. Layout sengaja asimetris — nama
rata kiri raksasa, subheading kecil rata kanan di baris berikutnya.

### `ScrambleText.js`
Komponen generik efek scramble, menghormati `prefers-reduced-motion` (langsung menampilkan
teks final tanpa animasi jika pengguna memintanya).

### `Reveal.js`
Wrapper animasi scroll-triggered: elemen "disingkap" pakai `clip-path: inset()` dari bawah
ke atas (bukan sekadar fade), memberi efek tirai terangkat yang konsisten dipakai di semua
heading section.

### `About.js`
Paragraf memakai **drop cap** raksasa (`::first-letter`, font Playfair Display, warna biru)
dan diapit **garis vertikal tipis** kiri-kanan untuk kesan kolom koran/majalah. Lebar paragraf
dibatasi `max-w-[60ch]` supaya tetap dalam rentang 50–70 karakter per baris yang nyaman dibaca.
Di sampingnya, **pull quote** besar italic dengan tanda kutip dekoratif raksasa (opacity rendah,
warna magenta) sebagai satu-satunya penggunaan warna aksen kedua di seluruh situs.

### `Projects.js`
Ditata sebagai katalog: judul proyek besar (`clamp(1.6rem, 5vw, 3.2rem)`) dengan efek
`underline-grow` saat hover, nomor urut & tahun dalam monospace di kiri-kanan. Klik judul
membuka deskripsi lewat trik CSS `grid-template-rows: 0fr → 1fr` (transisi tinggi yang mulus
tanpa JS animasi height). Baris dengan `project.wide = false` diberi indentasi kiri berbeda
(`md:pl-16`) supaya grid tidak terasa seragam/monoton.

### `Contact.js`
Tanpa form. Email ditampilkan dalam ukuran nyaris sebesar headline (`clamp(1.8rem, 7vw, 5rem)`)
sebagai satu-satunya "tombol aksi" di halaman. Tautan sosial ditata horizontal dengan
`tracking-widest`, semua memakai `underline-grow` yang sama supaya seluruh situs terasa satu
sistem tipografi yang konsisten.

### `DarkModeToggle.js`
Ikon matahari/bulan dari Lucide, berganti dengan animasi `rotate-in` (rotasi + scale) saat
di-klik. Preferensi disimpan di `localStorage`; script kecil di `layout.js` mencegah kedipan
tema salah saat halaman pertama dimuat.

### `Footer.js`
Konsisten dengan sistem: monospace, uppercase, tracking lebar, tanpa dekorasi tambahan.

### Latar `.blueprint-grid` (di `page.js` & `typography.css`)
Garis-garis tipis biru transparan berjarak 48px, meniru kertas kisi desainer — memperkuat
kesan "grid presisi" tanpa jadi elemen dekoratif yang mengganggu keterbacaan teks.

## Aksesibilitas & responsif

- Semua ukuran heading pakai `clamp()` sehingga menyesuaikan lebar layar tanpa breakpoint manual.
- `prefers-reduced-motion` mematikan animasi scramble & reveal.
- `:focus-visible` diberi outline biru untuk navigasi keyboard.
- Dibangun mobile-first: grid berubah dari satu kolom ke `md:grid-cols-12` dsb.
