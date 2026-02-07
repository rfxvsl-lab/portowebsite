# IronsCreative Portfolio Website

Portofolio website profesional untuk Dimas Ardiansyah - UI/UX Designer. Website ini dibangun dengan HTML, Tailwind CSS, dan Lucide Icons untuk menciptakan pengalaman pengguna yang modern dan responsif.

## 🎨 Fitur Utama

- **Navbar Responsif**: Navigation bar yang fully responsive dengan mobile menu toggle
- **Hero Section**: Section pembuka yang menarik dengan call-to-action
- **Services Section**: Menampilkan 3 layanan utama (Product Design, Mobile App Design, Web Design)
- **Statistics**: Statistik pengalaman dan pencapaian
- **Portfolio Projects**: Showcase 3 project terbaru dengan deskripsi
- **Why Hire Me**: Highlight 4 keunggulan utama
- **Testimonials**: Testimoni klien dengan carousel controls
- **Tools & Skills**: Display tools dan skill yang digunakan
- **Contact Footer**: Form kontak dan informasi kontak langsung

## 📱 Responsive Design

Website ini fully responsive dan telah dioptimalkan untuk:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Markup semantik dan terstruktur
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Icon library modern dan responsif
- **JavaScript Vanilla**: Untuk interaktivitas navbar dan smooth scrolling

## 📁 Struktur Folder

```
Portfolio-Website/
├── index.html          # File HTML utama
├── css/
│   └── style.css      # Custom CSS styles
├── js/                # (Opsional untuk JS tambahan)
├── assets/            # (Opsional untuk image/media)
├── README.md          # Dokumentasi ini
├── .gitignore         # Git ignore file
└── LICENSE            # License file
```

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/username/Portfolio-Website.git
cd Portfolio-Website
```

### 2. Buka di Browser
Cukup buka file `index.html` di browser favoritmu, atau gunakan Live Server:

- **VS Code**: Install extension "Live Server", kemudian right-click pada `index.html` → "Open with Live Server"
- **Python**: 
  ```bash
  python -m http.server 8000
  ```
- **Node.js (http-server)**:
  ```bash
  npx http-server
  ```

### 3. Customisasi
Edit file `index.html` untuk mengubah:
- Nama, deskripsi, dan informasi pribadi
- Warna tema (highlight warna purple di style dan class Tailwind)
- Konten project, testimonial, dan section lainnya
- Social media links
- Email dan kontak informasi

## 🎯 Fitur Navbar

Navbar memiliki fitur berikut:
- **Desktop**: Navigation horizontal dengan hover effects
- **Mobile**: Toggle menu dengan icon hamburger dan close
- **Fixed Position**: Navbar tetap di atas saat scroll
- **Smooth Scrolling**: Click pada nav link untuk smooth scroll ke section

## 🔧 Customisasi Warna

Warna utama yang digunakan:
- **Purple Accent**: `#7C3AED` (Untuk highlight dan CTA)
- **Dark Background**: `#0B0B0E` (Background utama)
- **Dark Surface**: `#121217` (Untuk card dan elemen)

Untuk mengubah warna tema, ubah value color di:
- `style.css` di bagian `:root`
- Atau cari dan ganti `purple-accent` dengan warna custom di `index.html`

## 📊 Performance

- ⚡ Lightweight dan fast-loading
- 🎯 Optimized untuk SEO
- ♿ Accessible dengan semantic HTML
- 📱 Mobile-first design approach

## 🔐 Keamanan

- Tidak ada API key atau credential yang terekspos
- Form contact hanya UI (dapat diintegrasikan dengan backend service seperti Formspree, Netlify Forms, atau backend API)

## 📝 Customization Checklist

Sebelum deploy, pastikan mengubah:
- [ ] Nama dan deskripsi di Hero Section
- [ ] URL social media links
- [ ] Email kontak
- [ ] Project information dan deskripsi
- [ ] Testimonial content dan nama client
- [ ] Tools & Skills yang sesuai dengan skill actual
- [ ] Copyright year di footer

## 🚀 Deployment

### Opsi 1: GitHub Pages
1. Push ke GitHub repository
2. Buka Settings → Pages
3. Pilih branch `main` sebagai source
4. Website akan tersedia di `https://username.github.io/Portfolio-Website/`

### Opsi 2: Netlify
1. Connect GitHub repository di Netlify
2. Deploy configuration sudah otomatis
3. Custom domain bisa ditambahkan

### Opsi 3: Vercel
1. Integrasikan dengan GitHub
2. Deploy dengan sekali klik
3. Support custom domain

### Opsi 4: Self-hosting
1. Upload folder ke hosting provider
2. Set `index.html` sebagai entry point

## 📧 Support Form Integration

Untuk membuat contact form bekerja, integrasikan dengan:
- **Formspree**: https://formspree.io/
- **Netlify Forms**: Built-in jika host di Netlify
- **Backend API**: Buat sendiri atau gunakan service

## 📄 License

Lihat file `LICENSE` untuk detail.

## 🤝 Contributing

Anda bebas untuk menggunakan template ini dan memodifikasinya sesuai kebutuhan.

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [HTML Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

**Created with ❤️ by Irons Creative**

Made for modern designers & developers who want a professional portfolio online.
