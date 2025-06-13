# Club Finder

**Club Finder** adalah aplikasi web berbasis React yang membantu mahasiswa kampus Plantaran menemukan, menjelajahi, dan bergabung dengan berbagai klub sesuai minat mereka. Aplikasi ini menampilkan daftar klub, detail klub, event mendatang, serta memungkinkan penyimpanan status klub yang sudah diikuti melalui `localStorage`.

![Club Finder Screenshot](./src/assets/screenshot.png)

---

## Fitur Utama

**Lihat Daftar Klub**  
Menampilkan daftar klub dalam format grid atau list, lengkap dengan gambar, deskripsi singkat, dan tombol untuk melihat detail.

**Detail Klub**  
Untuk meihat informasi lengkap tentang klub, termasuk deskripsi penuh, daftar event mendatang, dan tombol untuk bergabung ke klub.

**Join Klub (localStorage)**  
Status klub yang diikuti disimpan di browser menggunakan `localStorage`, sehingga tetap tersimpan meski halaman direfresh.

**Sort & Filter**  
Mengurutkan daftar klub berdasarkan nama (A-Z atau Z-A).

**Navigasi Halaman**  
Navigasi sederhana menggunakan `React Router` dengan halaman: Beranda, Klub, Tentang Kami, dan halaman 404 khusus.

**Responsif & Modern**  
UI dibangun dengan `Tailwind CSS` yang responsif untuk berbagai perangkat.

---

## Tech Stack

| Teknologi         | Fungsi                                           |
|-------------------|---------------------------------------------------|
| **React.js**       | Library utama untuk membangun UI                 |
| **Vite**           | Bundler modern untuk pengembangan yang cepat     |
| **Tailwind CSS**   | Utility-first styling untuk desain responsif     |
| **React Router**   | Navigasi antar halaman                           |
| **LocalStorage**   | Menyimpan status klub yang sudah diikuti         |

---

## Struktur Folder

\`\`\`
club-finder/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── About.jsx
│   ├── Clubs.jsx
│   ├── NotFoundPage.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FooterWeb.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ClubList.jsx
│   │   ├── ClubDetails.jsx
│   ├── data/
│   │   └── plantaranClub.js
│   ├── assets/
│       └── (gambar-gambar klub dan aset lainnya)
├── public/
│   └── vite.svg (favicon)
├── package.json
└── README.md
\`\`\`

---

## Cara Menjalankan

### **1. Clone Repo**

\`\`\`bash
git clone https://github.com/username/club-finder.git
cd club-finder
\`\`\`

### **2. Install Dependencies**

\`\`\`bash
npm install
\`\`\`

### **3. Run Project**

\`\`\`bash
npm run dev
\`\`\`

Aplikasi akan tersedia di: \`http://localhost:5173\`

---

## Rute Halaman

| Rute               | Fungsi                                      |
|---------------------|---------------------------------------------|
| \`/\`                | Beranda (Hero Section)                      |
| \`/about\`           | Tentang Aplikasi                            |
| \`/clubs\`           | Daftar Klub (Grid/List + Sort)              |
| \`/clubs/:id\`       | Detail Klub                                 |
| \`*\`                | Halaman 404 (Not Found)                     |

---

## Contoh Data Klub

\`\`\`javascript
{
  id: 'robotics',
  name: 'Robotics Club',
  image: 'robotic-club.jpg',
  shortDescription: 'Build and code robots with fellow enthusiasts.',
  description: 'Learn about robotics, compete in competitions, and join hands-on workshops every month!',
  events: [
    { name: 'Intro to Arduino', date: '2025-06-20' },
    { name: 'Robotics Expo', date: '2025-07-12' }
  ]
}
\`\`\`

---

## LocalStorage

Aplikasi menyimpan \`joinedClubs\` dalam bentuk array string ID klub di localStorage:

\`\`\`json
["robotics", "music"]
\`\`\`

---

## Desain

- Warna utama: \`#3B82F6\` (biru), \`#6366F1\` (ungu)
- Desain responsif: tampilan grid dan list menyesuaikan ukuran layar
- Navigasi sticky di atas

---
