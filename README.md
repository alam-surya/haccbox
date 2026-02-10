# Haccbox Website

Website Company Profile Haccbox. Dibuat dengan React + Vite.

---

## Daftar Isi

1. [Persyaratan](#persyaratan)
2. [Cara Setup (Baru Ambil Project)](#cara-setup)
3. [Cara Jalanin Development](#cara-jalanin-development)
4. [Cara Build untuk Production](#cara-build)
5. [Cara Deploy ke Server](#cara-deploy)
6. [Hal Penting untuk Handover](#hal-penting-untuk-handover)

---

## Persyaratan

- **Node.js** versi 20 atau lebih baru
- **npm** (biasanya sudah ikut saat instal Node.js)

Cek versi: jalankan `node -v` dan `npm -v` di terminal.

---

## Cara Setup

Untuk yang baru ambil project (clone atau download):

```bash
# 1. Masuk ke folder project
cd haccbox

# 2. Install dependency (cukup sekali, atau setiap kali ada perubahan package.json)
npm install

# 3. Jalanin development server
npm run dev
```

Setelah itu buka browser ke `http://localhost:5173`.

---

## Cara Jalanin Development

```bash
npm run dev
```

Situs akan jalan di `http://localhost:5173` dan otomatis refresh saat file diubah.

---

## Cara Build

Untuk buat file production (folder `dist/`):

```bash
npm run build
```

Output ada di folder `dist/`. Isi folder inilah yang di-upload ke server.

---

## Cara Deploy

Deploy otomatis lewat **GitHub Actions**. Cukup push ke branch `main`:

```bash
git add .
git commit -m "Pesan commit"
git push origin main
```

Setelah push, GitHub akan otomatis:
1. Build project
2. Upload isi folder `dist/` ke server DomaiNesia via FTP

Cek status deploy: buka repo di GitHub → tab **Actions**.

### GitHub Secrets (Wajib)

Supaya deploy jalan, harus ada **Secrets** di GitHub:
Repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Nama Secret    | Isi                                                        |
|----------------|------------------------------------------------------------|
| `FTP_SERVER`   | Host FTP dari DomaiNesia                                   |
| `FTP_USERNAME` | Username FTP dari cPanel                                   |
| `FTP_PASSWORD` | Password FTP                                               |
| `FTP_REMOTE_DIR` | Folder di server                                         |

---

## Hal Penting untuk Handover

### 1. Halaman Product Quality (Tabel dari Google Sheets)

- Data tabel diambil dari **Google Sheet**.
- Sheet ID ada di `src/utils/sheetUtils.js`.
- Sheet harus di-share: **"Anyone with the link can view"**.
- Di production, request ke Google Sheets lewat **PHP proxy** (`public/api/sheets-export.php`), bukan langsung dari browser.

### 2. Routing (URL Halaman)

- Pakai React Router. Supaya refresh/direct URL jalan di production, ada file **`.htaccess`** yang mengarahkan semua request ke `index.html`.
- File `.htaccess` ada di `public/` dan ikut ke `dist/` saat build.

### 3. Bahasa (Indonesia / English)

- Ada tombol ganti bahasa di navbar.
- Terjemahan ada di `src/translations/index.js`.

### 4. Script Tambahan

| Perintah              | Fungsi                                           |
|-----------------------|--------------------------------------------------|
| `npm run convert-images` | Konversi gambar ke WebP (di folder `src/assets`) |
| `node scripts/bump-body-font-size.mjs` | Naikkan ukuran font teks body di CSS (bukan title) |

### 5. Struktur Folder Singkat

```
src/
├── assets/       → Gambar, video, font
├── components/   → Komponen React (Navbar, Hero, dll)
├── pages/        → Halaman-halaman (Landing, Product, Service, dll)
├── translations/ → File terjemahan (ID/EN)
└── utils/        → Helper (mis. ambil data Google Sheet)

public/
├── .htaccess           → Untuk routing SPA di server
├── api/sheets-export.php → Proxy ke Google Sheets (production)
└── tab-bar-logo.ico    → Favicon
```

---

## Troubleshooting

| Masalah | Solusi |
|---------|--------|
| `npm install` error | Pastikan Node.js versi 20+, coba hapus `node_modules` lalu `npm install` lagi |
| Tabel Product Quality tidak muncul | Cek sharing Google Sheet, pastikan "Anyone with the link can view". Cek juga apakah server support PHP. |
| Halaman 404 saat refresh | Pastikan `.htaccess` ada di server dan mod_rewrite aktif |
| Deploy gagal | Cek GitHub Secrets (FTP_SERVER, FTP_USERNAME, dll) sudah benar |

---

Ada pertanyaan? Bisa tanya ke developer sebelumnya atau cek file konfigurasi di project.
