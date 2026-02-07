# ⚡ QUICK START GUIDE

Panduan cepat untuk memulai dan upload portfolio Anda!

## 🎯 Yang Sudah Tersedia

✅ **HTML Utama** (`index.html`):
- Navbar fully responsive dengan mobile menu toggle
- Hero section dengan call-to-action
- Services section (3 layanan)
- Statistics section
- Portfolio projects showcase (3 project)
- Why hire me section (4 advantages)
- Testimonials carousel
- Tools & Skills showcase
- Footer dengan contact form

✅ **CSS Custom** (`css/style.css`):
- Custom animations
- Responsive styles
- Accessibility features
- Print styles

✅ **Dokumentasi Lengkap**:
- `README.md` - Dokumentasi lengkap
- `GITHUB_SETUP.md` - Panduan setup & deploy
- `.gitignore` - Git ignore config
- `LICENSE` - MIT License

## 🚀 Langkah 1: Customize Content

Edit file `index.html` dan ubah:

### Section 1: Nama & Judul
```html
<!-- Line ~35 -->
<div class="text-xl font-bold tracking-tighter">
    Irons<span class="text-purple-accent">Creative</span>
</div>
```

### Section 2: Hero Content
```html
<!-- Line ~95 -->
<h4 class="text-lg font-medium text-gray-300 mb-2">Hello Buds</h4>
<h1 class="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
    I am <span class="text-purple-accent">Dimas Ardiansyah</span>
</h1>
```

### Section 3: Contact Info (Footer)
```html
<!-- Line ~480 -->
<p class="font-bold">dimasardiansyah@gmail.com</p>
<!-- dan -->
<p class="font-bold">Jakarta, Indonesia (Available Remotely)</p>
```

### Section 4: Social Media Links
```html
<!-- Line ~50-55 -->
<a href="#">Facebook</a>
<a href="#">Twitter</a>
<a href="#">Instagram</a>
<a href="#">LinkedIn</a>
```

## 🎨 Langkah 2: Customize Warna (Opsional)

Warna utama adalah **Purple** (`#7C3AED`). Untuk mengubah:

**Edit di CSS** (`css/style.css`):
```css
:root {
    --color-purple: #7C3AED;  /* Ganti dengan warna pilihan */
}
```

Atau cari `purple-accent` di `index.html` dan ganti dengan:
- `red-accent`
- `blue-accent`
- `green-accent`
- atau custom color dengan Tailwind

## 🖼️ Langkah 3: Update Projects

Edit bagian projects di `index.html` (line ~375-420):

```html
<h3 class="text-2xl font-bold mb-3">
    <span class="text-emerald-400">Daur</span> Ulang Mobile Apps
</h3>
<p class="text-gray-500 text-sm max-w-xl mb-6">
    Aplikasi pengelolaan limbah rumah tangga untuk mendukung gaya hidup zero waste.
</p>
```

## 👤 Langkah 4: Update Testimonials

Edit testimonial section (line ~450):

```html
<p class="text-gray-400 text-lg italic leading-relaxed mb-8">
    "Dimas adalah desainer yang sangat bertalenta..."
</p>
<h4 class="text-xl font-bold text-purple-accent">Iqbal Habibi</h4>
<p class="text-gray-500 text-sm">Product Manager at TechIndo</p>
```

## 🛠️ Langkah 5: Test Local

### Option 1: VS Code Live Server
1. Install extension "Live Server"
2. Right-click `index.html` → "Open with Live Server"
3. Browser otomatis buka

### Option 2: Terminal
```bash
# Dengan Python
cd "Portfolio-Website"
python -m http.server 8000

# Atau dengan Node.js
npx http-server

# Atau dengan PHP
php -S localhost:8000
```

Buka di browser: `http://localhost:8000`

## ✅ Langkah 6: Verifikasi Responsive

Test di berbagai ukuran screen:
- ✅ Desktop (1920px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

Gunakan DevTools (F12) → Device Toolbar

## 🚀 Langkah 7: Setup GitHub

1. Create repository di GitHub dengan nama: `Portfolio-Website`
2. Terminal:
```bash
cd "d:\lkmo ipri anj\duplikat\Porto refreence\Portfolio-Website"
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/Portfolio-Website.git
git push -u origin main
```

Ganti `USERNAME` dengan GitHub username Anda!

## 🌍 Langkah 8: Deploy ke GitHub Pages

1. Repository → Settings → Pages
2. Branch: `main` | Folder: `/ (root)`
3. Save
4. Website live di: `https://USERNAME.github.io/Portfolio-Website/`

⏳ Tunggu 1-2 menit untuk deployment.

## 📝 Checklist Sebelum Deploy

- [ ] Update nama dan foto profil
- [ ] Update social media links
- [ ] Update email kontak
- [ ] Update projects & descriptions
- [ ] Update testimonials
- [ ] Test responsive di mobile
- [ ] Test all navigation links
- [ ] Create GitHub repository
- [ ] Push ke GitHub
- [ ] Enable GitHub Pages

## 🎉 Selesai!

Portfolio Anda sudah live di internet! 

### Next Steps:
- Share link ke hiring managers
- Update regularly dengan project terbaru
- Monitor analytics (tambahkan Google Analytics)
- Optimize SEO (tambahkan meta tags)

## 💡 Pro Tips

1. **Networking**: Share portfolio di LinkedIn, Twitter, Discord dev communities
2. **Case Studies**: Update project descriptions dengan detailed case studies
3. **Blog**: Pertimbangkan tambah blog section untuk technical writing
4. **Contact Form**: Integrate dengan Formspree atau Netlify Forms untuk working contact form
5. **Performance**: Add images untuk projects (replace placeholder icons)

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Navbar tidak responsive | Clear cache (Ctrl+Shift+Delete) |
| Images tidak muncul | Add image files ke `assets/` folder |
| Deploy tidak bekerja | Check Settings → Pages branch setting |
| Links tidak jalan | Pastikan semua `href` dimulai dengan `#` |

## 📚 Resource Links

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons Library](https://lucide.dev/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)

---

**Pertanyaan? Cek README.md untuk dokumentasi lebih detail!**

Happy coding! 🚀✨
