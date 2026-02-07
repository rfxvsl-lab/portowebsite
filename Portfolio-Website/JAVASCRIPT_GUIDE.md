# 🔧 JAVASCRIPT FUNCTIONALITY GUIDE

## Overview

Website ini sekarang memiliki **full JavaScript functionality** untuk:
- ✅ Mobile menu toggle
- ✅ Service carousel
- ✅ Testimonials carousel  
- ✅ Smooth scrolling
- ✅ Active nav highlight
- ✅ Form handling
- ✅ Scroll animations

---

## 📁 File Structure

```
js/
└── main.js                    # Main JavaScript file dengan semua functionality
```

---

## 🎯 Semua Functionality

### 1. **Mobile Menu Toggle** 🍔

**Lokasi**: `js/main.js` → `initMobileMenu()`

**Fitur**:
- Click hamburger icon untuk buka/tutup menu
- Auto-close saat klik link
- Auto-close saat scroll
- Auto-close saat klik di luar menu

**HTML Triggers**:
```html
<button id="mobileMenuBtn">...</button>
<div id="mobileMenu">...</div>
```

---

### 2. **Service Carousel** 🎠

**Lokasi**: `js/main.js` → `initServiceCarousel()`

**Fitur**:
- Tampilkan 1 service card (mobile) atau 3 cards (desktop)
- Click prev/next button untuk navigate
- Indicator dots menunjukkan posisi
- Keyboard navigation (arrow keys)
- Update indicators real-time

**HTML Triggers**:
```html
<div data-service-card>...</div>
<button data-service-prev>...</button>
<button data-service-next>...</button>
<div data-service-indicator>...</div>
```

**Default**: Mobile App Design (index 1) active

---

### 3. **Testimonials Carousel** 💬

**Lokasi**: `js/main.js` → `initTestimonialCarousel()`

**Fitur**:
- Tampilkan testimonial satu per satu
- Click prev/next button untuk navigate
- **Auto-advance setiap 5 detik** (otomatis berjalan!)
- Smooth fade transition
- Support infinite loop

**HTML Triggers**:
```html
<div data-testimonial-item>...</div>
<button data-testimonial-prev>...</button>
<button data-testimonial-next>...</button>
```

**Default**: Testimonial 1 (Iqbal Habibi)
**Total**: 3 testimonials tersedia

---

### 4. **Smooth Scrolling** 📜

**Lokasi**: `js/main.js` → `initSmoothScroll()`

**Fitur**:
- Click any link dengan `href="#section"` → smooth scroll ke section
- Automatic offset untuk navbar fixed (80px)
- Semua nav links dan CTA buttons

**Contoh**:
```html
<a href="#services">Services</a>
<a href="#projects">Projects</a>
<button>Hire Me</button>  <!-- href="#contact" -->
```

---

### 5. **Active Navigation Highlight** 🎯

**Lokasi**: `js/main.js` → `initActiveNavLink()`

**Fitur**:
- Highlight nav link saat section sedang di-view
- Automatic update saat scroll
- Show border-bottom purple saat active
- Change text color to white saat active

**Implementation**: 
- Read section IDs dari HTML
- Compare dengan scroll position
- Update class accordingly

---

### 6. **Form Handling** 📝

**Lokasi**: `js/main.js` → `initFormHandling()`

**Fitur**:
- Validate empty fields
- Show success message
- Button disabled after submit
- Auto-reset form setelah 2 detik
- Ready untuk integration dengan backend

**Inputs**:
- Name input
- Email input
- Message textarea

---

### 7. **Scroll Reveal Animations** ✨

**Lokasi**: `js/main.js` → `initScrollReveal()`

**Fitur**:
- Trigger animation saat element masuk viewport
- FadeInUp effect
- Intersection Observer API
- Unobserve setelah animate (performance)

**Usage**: Add `data-animate` attribute ke element:
```html
<div data-animate>Will animate on scroll</div>
```

---

## 🎮 How to Test

### Test Mobile Menu
1. Resize browser < 768px
2. Click hamburger icon ☰
3. Menu should toggle
4. Click link → menu tutup
5. Scroll → menu tutup

### Test Service Carousel
1. View di desktop (3 cards visible) atau mobile (1 card)
2. Click prev/next button
3. Indicators should update
4. Try keyboard arrows ← →

### Test Testimonials Carousel
1. View testimonials section
2. Should auto-advance setiap 5 detik
3. Click prev/next button
4. Fade effect smooth
5. Loop ke testimonial pertama setelah last

### Test Smooth Scrolling
1. Click "Home", "Services", "Projects" di navbar
2. Should smooth scroll
3. Not instant jump

### Test Active Nav
1. Scroll ke Services section
2. "Services" link in navbar should highlight
3. Scroll ke Projects section
4. "Projects" link should highlight

### Test Form
1. Click "Send Message" tanpa isi field
2. Should show alert
3. Isi semua field dan submit
4. Should show "✓ Message Sent!"
5. Form reset

---

## 📝 Customization

### Ubah Auto-Advance Testimonials Timing
File: `js/main.js` line ~150

```javascript
setInterval(nextTestimonial, 5000); // Change 5000 to different milliseconds
// 3000 = 3 seconds
// 10000 = 10 seconds
```

### Add More Testimonials
1. Tambah HTML di testimonials section:
```html
<div data-testimonial-item>
    <!-- New testimonial content -->
</div>
```
2. No need untuk update JavaScript - auto detect

### Ubah Service Cards di Mobile
File: `js/main.js` line ~75

Modify bagian carousel untuk tampilkan multiple cards (edit CSS hidden class behavior)

### Disable Auto-Advance Testimonials
Comment out line ~150 di `js/main.js`:
```javascript
// setInterval(nextTestimonial, 5000);
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Mobile menu tidak toggle | Check `mobileMenuBtn` ID di HTML |
| Service carousel stuck | Clear browser cache |
| Smooth scroll tidak jalan | Check href format = `#section-id` |
| Testimonials tidak auto-advance | Check console untuk errors |
| Form tidak submit | Fill all fields first |

---

## 📊 Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Optimization Tips

1. **Icons**: Lucide icons loaded dari CDN - fast enough
2. **Animations**: Use `transition-all` carefully (performance)
3. **Form**: Consider integrate dengan Formspree atau backend API
4. **Testimonials**: Add more untuk better showcase

---

## 🔗 Integration Points

Ready untuk integrate dengan:

### Contact Form Integration
```javascript
// Di form handler, tambahkan:
fetch('/api/contact', {
    method: 'POST',
    body: formData
})
```

### Dynamic Content
```javascript
// Untuk dynamic testimonials dari API:
fetch('/api/testimonials')
    .then(res => res.json())
    .then(data => {
        // Update DOM dengan testimonial baru
    })
```

---

## 📚 Code Structure

```javascript
// main.js organization:
1. initMobileMenu()           - Mobile menu functionality
2. initServiceCarousel()      - Service carousel
3. initTestimonialCarousel()  - Testimonials carousel
4. initSmoothScroll()         - Smooth scroll links
5. initActiveNavLink()        - Highlight active nav
6. initIcons()                - Load Lucide icons
7. initFormHandling()         - Form submission
8. initScrollReveal()         - Scroll animations
9. initAll()                  - Run all functions
10. Load on DOMContentLoaded   - Auto-initialize
```

---

## ✅ Testing Checklist

- [ ] Mobile menu toggle works
- [ ] Service carousel navigation works
- [ ] Testimonials auto-advance
- [ ] Testimonials manual navigation works
- [ ] Smooth scroll on links
- [ ] Active nav highlight changes saat scroll
- [ ] Form validation works
- [ ] Form submit shows message
- [ ] No console errors
- [ ] Mobile responsive (< 768px)

---

**All functionality is now fully implemented! 🎉**

Test setiap feature dan report jika ada yang tidak berjalan dengan baik.
