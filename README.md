# SMP Muhammadiyah 7 Wuluhan — Website Resmi

Website profil sekolah berbasis React + Vite + TanStack Router.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **TanStack Router v1** (client-side routing, file-based)
- **Tailwind CSS v4**
- **shadcn/ui** (komponen UI)

---

## Cara Menjalankan di VS Code

### Prasyarat
- **Node.js** v18 atau lebih baru → [download](https://nodejs.org)
- **npm** (sudah termasuk di Node.js)

### Langkah

```bash
# 1. Clone atau ekstrak project, masuk ke folder
cd smp-mutu7

# 2. Install semua dependensi
npm install

# 3. Jalankan server development
npm run dev
```

Buka browser ke **http://localhost:5173**

### Build untuk produksi

```bash
npm run build
npm run preview   # cek hasil build secara lokal
```

---

## Deploy ke Vercel

### Cara 1 — Via CLI (paling cepat)

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke akun Vercel
vercel login

# Deploy dari folder project
vercel

# Ikuti prompt:
# - Set up and deploy? → Y
# - Which scope? → pilih akun kamu
# - Link to existing project? → N (buat baru)
# - Project name → smp-mutu7-wuluhan (atau nama lain)
# - Directory → ./ (enter saja)
```

### Cara 2 — Via GitHub (lebih praktis untuk update rutin)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → **New Project**
3. Import repository dari GitHub
4. Vercel otomatis mendeteksi Vite — klik **Deploy**

### Cara 3 — Drag & Drop

```bash
npm run build
```
Lalu drag folder `dist/` ke [vercel.com/new](https://vercel.com/new).

> File `vercel.json` sudah dikonfigurasi untuk SPA routing — semua URL diarahkan ke `index.html`.

---

## Struktur Folder Penting

```
src/
├── assets/          foto-foto sekolah
├── components/      komponen reusable (Header, Footer, dll)
│   └── ui/          komponen shadcn/ui
├── routes/          halaman-halaman (TanStack Router file-based)
│   ├── __root.tsx   layout global
│   ├── index.tsx    halaman beranda
│   ├── ppdb.tsx     halaman PPDB
│   └── ...
├── main.tsx         entry point
├── router.tsx       setup router
└── styles.css       global styles + Tailwind
public/
└── sitemap.xml      sitemap statis
```

## Update Konten

| Konten | File |
|--------|------|
| Deadline PPDB di announcement bar | `src/components/AnnouncementBar.tsx` → `PPDB_DEADLINE` |
| Data guru | `src/components/TeachersSection.tsx` |
| Daftar prestasi | `src/components/PrestasiShowcase.tsx` |
| Jadwal gelombang PPDB | `src/routes/ppdb.tsx` → `gelombang` |
| Nomor panitia PPDB | `src/routes/ppdb.tsx` → `panitia` |
| Nomor WhatsApp float | `src/components/WhatsAppFloat.tsx` → `PHONE` |
