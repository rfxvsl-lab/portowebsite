# 🚀 GITHUB SETUP GUIDE

Panduan lengkap untuk upload project ke GitHub dan deploy.

## 📋 Prerequisites

- Install [Git](https://git-scm.com/)
- Akun [GitHub](https://github.com/) (gratis)

## ⚙️ Setup di GitHub

### Step 1: Buat Repository Baru di GitHub
1. Login ke GitHub
2. Klik **+** icon di top right → **New repository**
3. Isi form:
   - **Repository name**: `Portfolio-Website` (atau nama lain sesuai preferensi)
   - **Description**: "My professional UI/UX portfolio website"
   - **Public** atau **Private** (pilih sesuai preferensi)
   - Jangan initialize dengan README/gitignore (sudah ada di local)
4. Klik **Create repository**

### Step 2: Setup Local Git Repository

Buka terminal/command prompt dan navigate ke folder `Portfolio-Website`:

```bash
cd "d:\lkmo ipri anj\duplikat\Porto refreence\Portfolio-Website"
```

Inisialisasi git:
```bash
git init
```

Add semua file:
```bash
git add .
```

Buat initial commit:
```bash
git commit -m "Initial commit: UI/UX portfolio website"
```

### Step 3: Connect ke GitHub

Ganti `USERNAME` dengan username GitHub kamu dan `REPOSITORY` dengan nama repository:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Contoh:
```bash
git branch -M main
git remote add origin https://github.com/dimasardiansyah/Portfolio-Website.git
git push -u origin main
```

## ✅ Verifikasi Upload

1. Refresh halaman repository di GitHub
2. Semua file sudah tampil di repository
3. Klik "About" section di kanan halaman repository untuk menambahkan deskripsi

## 🌍 Deploy dengan GitHub Pages

GitHub Pages memungkinkan deploy website gratis langsung dari repository!

### Cara Setup GitHub Pages:

1. Di repository GitHub, klik **Settings**
2. Di sidebar kiri, pilih **Pages**
3. Bawah "Source", pilih:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Klik **Save**

Website akan tersedia di:
```
https://USERNAME.github.io/REPOSITORY/
```

Contoh:
```
https://dimasardiansyah.github.io/Portfolio-Website/
```

⏳ Tunggu 1-2 menit untuk deployment selesai.

## 🔄 Update Website

Setiap kali ingin update:

```bash
# Edit file yang diperlukan, kemudian:

git add .
git commit -m "Update: Deskripsi perubahan"
git push origin main
```

GitHub Pages akan otomatis update dalam 1-2 menit.

## 🎯 Alternatif Deployment

### Opsi 1: Netlify (Recommended)
1. Login ke [netlify.com](https://www.netlify.com/)
2. Connect GitHub account
3. Pilih repository
4. Deploy settings otomatis (index.html sebagai entry)
5. Klik **Deploy**

**Keuntungan**:
- Build preview untuk setiap commit
- Custom domain support
- Better performance

### Opsi 2: Vercel
1. Login ke [vercel.com](https://vercel.com/)
2. Import project dari GitHub
3. Deploy otomatis
4. Real-time preview

### Opsi 3: Self-hosting
Gunakan hosting provider (Hostinger, Bluehost, dll) dan upload via FTP/File Manager.

## 📝 Custom Domain (Opsional)

Jika ingin pakai domain custom (misalnya: `portfolio.dimasardiansyah.com`):

### GitHub Pages + Custom Domain:
1. Beli domain di registrar (Namecheap, GoDaddy, dll)
2. Settings → Pages → Custom domain
3. Masukkan domain name
4. Update DNS records di registrar:
   ```
   A: 185.199.108.153
   A: 185.199.109.153
   A: 185.199.110.153
   A: 185.199.111.153
   CNAME: username.github.io
   ```

### Netlify + Custom Domain:
1. Domain settings → Custom domain
2. Ikuti instruksi untuk update DNS

## 🔍 Troubleshooting

### Website tidak muncul?
- ✅ Tunggu 2-3 menit setelah push
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Cek branch setting di Pages → pastikan `main`

### 404 Error?
- ✅ Pastikan `index.html` di root folder
- ✅ Cek path untuk CSS dan JS file

### HTTPS tidak aktif?
- ✅ GitHub Pages otomatis HTTPS setelah setup
- ✅ Jika masih HTTP, tunggu 24 jam

## 📊 Monitoring & Analytics

### Tambahkan Google Analytics:
1. Buat akun [Google Analytics](https://analytics.google.com/)
2. Add property untuk website
3. Copy tracking code
4. Paste ke `<head>` section index.html sebelum closing tag

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎉 Selesai!

Website portfolio Anda sudah live di internet! 

Next steps:
- ✅ Share link ke hiring managers
- ✅ Update portfolio secara berkala dengan project baru
- ✅ Maintain contact form jika ingin integrate dengan backend
- ✅ Monitor analytics untuk track visitor

---

**Happy Coding! 🚀**
