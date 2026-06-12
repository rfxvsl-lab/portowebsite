function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (!mobileMenuBtn) return;

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

function initServiceCarousel() {
    const serviceCards = Array.from(document.querySelectorAll('[data-service-card]'));
    const controls = document.querySelector('[data-service-controls]');
    if (serviceCards.length === 0 || !controls) return;

    let currentService = 0;

    const updateView = () => {
        if (window.innerWidth >= 768) { // md breakpoint
            // Show all cards on desktop
            serviceCards.forEach(card => card.style.display = 'block');
            controls.style.display = 'none';
        } else {
            // Show only current card on mobile
            serviceCards.forEach((card, index) => {
                card.style.display = index === currentService ? 'block' : 'none';
            });
            controls.style.display = 'flex';
            updateServiceIndicators();
        }
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
        updateView();
    };

    const prevService = () => {
        currentService = (currentService - 1 + serviceCards.length) % serviceCards.length;
        updateView();
    };

    document.querySelector('[data-service-next]')?.addEventListener('click', nextService);
    document.querySelector('[data-service-prev]')?.addEventListener('click', prevService);

    window.addEventListener('resize', updateView);
    updateView(); // Initial call
}

function initTestimonialCarousel() {
    const testimonialItems = document.querySelectorAll('[data-testimonial-item]');
    if (testimonialItems.length === 0) return;

    let currentTestimonial = 0;

    const updateTestimonialDisplay = () => {
        testimonialItems.forEach((item, index) => {
            item.style.display = index === currentTestimonial ? 'flex' : 'none';
            item.style.opacity = index === currentTestimonial ? '1' : '0';
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

    document.querySelector('[data-testimonial-next]')?.addEventListener('click', nextTestimonial);
    document.querySelector('[data-testimonial-prev]')?.addEventListener('click', prevTestimonial);

    setInterval(nextTestimonial, 5000);
    updateTestimonialDisplay(); // Initial call
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 64; // Adjusted for mobile navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });
}

function initActiveNavLink() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]:not(.px-6)');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-white', 'active-link-style');
            link.classList.add('text-gray-400');
            
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-gray-400');
                link.classList.add('text-white', 'active-link-style');
            }
        });
    });
}

function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function initFormHandling() {
    const contactForm = document.querySelector('form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        const submitBtn = this.querySelector('button[type="submit"]');
        
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            submitBtn.textContent = 'Please fill all fields';
            setTimeout(() => {
              submitBtn.textContent = 'Kirim Pesan';
            }, 2000)
            return;
        }
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
}

function initAll() {
    initMobileMenu();
    initServiceCarousel();
    initTestimonialCarousel();
    initSmoothScroll();
    initActiveNavLink();
    initIcons();
    initFormHandling();
    initScrollReveal();
    console.log('✓ All mobile-first functions initialized successfully');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

window.addEventListener('load', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
