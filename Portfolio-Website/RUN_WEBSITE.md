# 🚀 Cara Menjalankan Website Locally

## ⚠️ PENTING: Ini Bukan Project npm!

Website Anda adalah **pure HTML + CSS + JavaScript** yang berjalan di browser tanpa build process. 
**Anda TIDAK perlu npm install!**

## 📌 Folder yang Benar

✅ Nama folder: **`Portfolio-Website`** (dengan 'o' single, bukan "Portofolio")

Dari terminal, gunakan:
```bash
cd "d:\lkmo ipri anj\duplikat\Porto refreence\Portfolio-Website"
```

## 🌐 Opsi 1: VS Code Live Server (RECOMMENDED)

### Setup:
1. Buka folder `Portfolio-Website` di VS Code
2. Install extension "Live Server" (oleh Ritwick Dey)
   - Buka Extensions (Ctrl+Shift+X)
   - Cari "Live Server"
   - Install

### Jalankan:
1. Buka file `index.html`
2. Right-click di file → **"Open with Live Server"**
3. Browser otomatis buka di `http://localhost:5500/`

**Keuntungan**: Auto-refresh saat edit file ✨

## 🌐 Opsi 2: Simple HTTP Server (Node.js)

Jika punya Node.js installed:

```bash
# Pastikan di folder Portfolio-Website
cd "d:\lkmo ipri anj\duplikat\Porto refreence\Portfolio-Website"

# Install http-server secara global (sekali saja)
npm install -g http-server

# Jalankan
http-server
```

Akses di: `http://localhost:8080/`

## 🌐 Opsi 3: PowerShell HTTP Server (Bawaan Windows)

```powershell
cd "d:\lkmo ipri anj\duplikat\Porto refreence\Portfolio-Website"

# Jalankan built-in server (Windows)
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:8000/")
$listener.Start()
Write-Host "Server running at http://localhost:8000/"

# Keep it running (Ctrl+C untuk stop)
while($true) {
    $context = $listener.GetContext()
    $response = $context.Response
    $response.Headers.Add("Content-Type", "text/html")
    
    $filePath = ".$($context.Request.Url.LocalPath)"
    if ((Test-Path $filePath) -and (Get-Item $filePath).PSIsContainer) {
        $filePath += "\index.html"
    }
    
    if (Test-Path $filePath) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    $response.Close()
}
```

## 🌐 Opsi 4: Double-Click index.html

Paling simple - langsung double-click file `index.html`:
- Browser akan terbuka otomatis
- Tapi tidak ada auto-refresh (harus manual F5)
- Good enough untuk quick preview

## ✅ Test Website

Setelah website terbuka:
- ✅ Test navbar responsif (resize window)
- ✅ Click navigation links (harus smooth scroll)
- ✅ Test mobile menu (klik hamburger di mobile size)
- ✅ Test semua button dan link

## 🎯 Before Deploy to GitHub

Checklist:
- [ ] Website berjalan di local tanpa error
- [ ] Navbar responsive di mobile
- [ ] All links working
- [ ] Customize nama & content
- [ ] Update contact email

## 🚀 Selanjutnya: Upload ke GitHub

Setelah yakin, ikuti [GITHUB_SETUP.md](GITHUB_SETUP.md)

---

**Gunakan Opsi 1 (Live Server) untuk best experience!** ✨
