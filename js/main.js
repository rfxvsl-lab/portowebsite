function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (!mobileMenuBtn) return;

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }
    });

    // Close menu on scroll
    window.addEventListener('scroll', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
}

// ===================================
// 2. SERVICE CAROUSEL
// ===================================
function initServiceCarousel() {
    const serviceCards = document.querySelectorAll('[data-service-card]');
    if (serviceCards.length === 0) return;

    let currentService = 1; // Mobile App Design is default (index 1)

    const updateServiceDisplay = () => {
        serviceCards.forEach((card, index) => {
            if (index === currentService) {
                card.classList.remove('hidden');
                card.classList.add('block');
            } else {
                card.classList.add('hidden');
                card.classList.remove('block');
            }
        });
        updateServiceIndicators();
    };

    const updateServiceIndicators = () => {
        const indicators = document.querySelectorAll('[data-service-indicator]');
        indicators.forEach((indicator, index) => {
            if (index === currentService) {
                indicator.classList.add('w-8', 'bg-purple-accent');
                indicator.classList.remove('w-3', 'bg-white/20');
            } else {
                indicator.classList.add('w-3', 'bg-white/20');
                indicator.classList.remove('w-8', 'bg-purple-accent');
            }
        });
    };

    const nextService = () => {
        currentService = (currentService + 1) % serviceCards.length;
        updateServiceDisplay();
    };

    const prevService = () => {
        currentService = (currentService - 1 + serviceCards.length) % serviceCards.length;
        updateServiceDisplay();
    };

    // Attach to buttons
    const nextBtn = document.querySelector('[data-service-next]');
    const prevBtn = document.querySelector('[data-service-prev]');

    if (nextBtn) nextBtn.addEventListener('click', nextService);
    if (prevBtn) prevBtn.addEventListener('click', prevService);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextService();
        if (e.key === 'ArrowLeft') prevService();
    });

    // Initial display
    updateServiceDisplay();
}

// ===================================
// 3. TESTIMONIALS CAROUSEL
// ===================================
function initTestimonialCarousel() {
    const testimonialItems = document.querySelectorAll('[data-testimonial-item]');
    if (testimonialItems.length === 0) return;

    let currentTestimonial = 0;

    const updateTestimonialDisplay = () => {
        testimonialItems.forEach((item, index) => {
            if (index === currentTestimonial) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    };

    const nextTestimonial = () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        updateTestimonialDisplay();
    };

    const prevTestimonial = () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
        updateTestimonialDisplay();
    };

    // Attach to buttons
    const nextBtn = document.querySelector('[data-testimonial-next]');
    const prevBtn = document.querySelector('[data-testimonial-prev]');

    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);

    // Auto-advance testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Initial display
    updateTestimonialDisplay();
}

// ===================================
// 4. SMOOTH SCROLLING
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// 5. ACTIVE NAV LINK
// ===================================
function initActiveNavLink() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('[id]').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-white', 'border-b', 'border-purple-accent');
            link.classList.add('text-gray-400');
            
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-gray-400');
                link.classList.add('text-white', 'border-b', 'border-purple-accent');
            }
        });
    });
}

// ===================================
// 6. LUCIDE ICONS INITIALIZATION
// ===================================
function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ===================================
// 7. FORM HANDLING
// ===================================
function initFormHandling() {
    const contactForm = document.querySelector('form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        
        // Validate
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            alert('Please fill all fields');
            return;
        }
        
        // Show success message
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.disabled = true;
        
        // Reset form
        setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ===================================
// 8. SCROLL REVEAL ANIMATIONS (BONUS)
// ===================================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe service cards, project cards, testimonials
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// 9. INITIALIZE ALL
// ===================================
function initAll() {
    initMobileMenu();
    initServiceCarousel();
    initTestimonialCarousel();
    initSmoothScroll();
    initActiveNavLink();
    initIcons();
    initFormHandling();
    initScrollReveal();
    
    console.log('✓ All functions initialized successfully');
}

// ===================================
// 10. RUN ON PAGE LOAD
// ===================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

// Handle dynamic icon updates
window.addEventListener('load', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
