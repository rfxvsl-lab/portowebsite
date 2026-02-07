# 📋 TROUBLESHOOTING & FAQ

## ❌ Error: "Cannot find path 'Portofolio-Website'"

**Masalah**: Typo nama folder - `Portofolio` vs `Portfolio`

**Solusi**:
```powershell
# SALAH (typo - ada 'o' double)
cd "Portofolio-Website"

# BENAR (single 'o')
cd "Portfolio-Website"
```

Pastikan folder name adalah `Portfolio-Website` (dengan Portfolio yang benar)

---

## ❌ Error: "npm error enoent Could not read package.json"

**Masalah**: Mencoba npm install di folder yang tidak ada package.json

**Penjelasan**: Website ini adalah **PURE FRONTEND** - tidak perlu npm atau Node.js!

**Solusi**: JANGAN gunakan npm. Cukup buka di browser:
- Opsi 1: Install "Live Server" di VS Code
- Opsi 2: Double-click `index.html`
- Opsi 3: Double-click `run-server.ps1` (jika punya Python)

---

## ❌ Error: "Python tidak ditemukan"

**Masalah**: Mencoba `python -m http.server` tapi Python tidak installed

**Solusi**:
1. Install Python dari https://www.python.org/
2. Atau gunakan opsi lain:
   - **RECOMMENDED**: Install "Live Server" extension di VS Code
   - Atau: Double-click `index.html` langsung

---

## ❓ Bagaimana cara menjalankan website?

### Opsi A: VS Code Live Server (EASIEST) ⭐⭐⭐
1. Install "Live Server" extension (search di Extensions)
2. Right-click `index.html` → "Open with Live Server"
3. Done! Browser otomatis buka

**Kelebihan**: Auto-refresh saat save file

### Opsi B: Double-Click index.html
1. Pergi ke folder `Portfolio-Website`
2. Double-click `index.html`
3. Browser buka otomatis

**Kelebihan**: Paling simple, tidak perlu install apapun
**Kekurangan**: Harus F5 manual saat edit

### Opsi C: Run PowerShell Script
1. Double-click `run-server.ps1` (perlu Python installed)
2. Atau buka PowerShell dan jalankan:
```powershell
cd "d:\lkmo ipri anj\duplikat\Porto refreence\Portfolio-Website"
python -m http.server 8000
```

---

## ❓ Apa bedanya dengan project npm?

| Aspek | Portfolio Website | Project npm |
|-------|-------------------|------------|
| Dependencies | ❌ Tidak ada | ✅ Banyak |
| Build process | ❌ Tidak perlu | ✅ Perlu npm build |
| Cara jalankan | Browser biasa | npm start |
| Deployment | Upload HTML/CSS | Build dulu |
| Kompleksitas | Simple ✨ | Complex |

**Website Anda hanya HTML + CSS + JS di browser!**

---

## ❓ Bagaimana cara customize?

1. Open `index.html` di text editor (VS Code, Sublime, etc)
2. Edit content yang ingin diubah (nama, email, projects, dll)
3. Save file
4. Refresh browser (Ctrl+R / F5)
5. Lihat perubahan

**Jangan lupa baca [QUICK_START.md](QUICK_START.md) untuk detail!**

---

## ❓ Apa itu Tailwind CSS yang digunakan?

Tailwind CSS adalah **utility-first CSS framework** yang:
- Tidak perlu install (sudah di CDN)
- Membuat styling lebih cepat
- Responsive-first design

**TL;DR**: Framework CSS yang membuat website responsif & modern

---

## ❓ Apa itu Lucide Icons?

Library ikon SVG modern yang:
- Tersedia di CDN (tidak perlu download)
- Responsive & scalable
- 100+ icons tersedia

**TL;DR**: Ikon-ikon cantik siap pakai

---

## ❓ Bagaimana cara deploy ke GitHub?

Follow panduan di [GITHUB_SETUP.md](GITHUB_SETUP.md) dengan step-by-step:

TL;DR:
1. Buat repository di GitHub
2. Push folder ke GitHub
3. Enable GitHub Pages di Settings
4. Website live di `https://username.github.io/Portfolio-Website/`

---

## ✅ Checklist Awal

Sebelum mulai customize:

- [ ] Folder name: `Portfolio-Website` (benar)
- [ ] File `index.html` ada dan bisa dibuka
- [ ] Website bisa dilihat di browser
- [ ] Navbar responsive (test resize browser)
- [ ] All links working (test klik navigation)

---

## 🆘 Masih Error? Coba ini:

1. **Clear browser cache**: Ctrl+Shift+Delete
2. **Hard refresh**: Ctrl+Shift+R (atau Cmd+Shift+R di Mac)
3. **Close & reopen browser**
4. **Close & restart Live Server** (jika pake Live Server)
5. **Check file permissions** - pastikan bisa read

---

## 📞 Kontrak Support Files

Jika ada masalah, cek file dokumentasi:
- **RUN_WEBSITE.md** - Cara jalankan website
- **QUICK_START.md** - Customize & setup
- **GITHUB_SETUP.md** - Deploy ke GitHub
- **README.md** - Dokumentasi lengkap

---

**Happy coding! 🚀**
