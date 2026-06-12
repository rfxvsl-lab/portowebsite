function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (!mobileMenuBtn || !mobileMenu) return;

    const toggleMenu = (forceClose = false) => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (forceClose || !isHidden) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    };

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });
}

function initServiceCarousel() {
    const serviceCards = Array.from(document.querySelectorAll('[data-service-card]'));
    const controls = document.querySelector('[data-service-controls]');
    const indicators = document.querySelectorAll('[data-service-indicator]');
    if (serviceCards.length === 0) return;

    let currentService = 1; // Default to the featured item

    const updateView = () => {
        const isMobile = window.innerWidth < 768;
        
        if (controls) {
            controls.style.display = isMobile ? 'flex' : 'none';
        }

        serviceCards.forEach((card, index) => {
            if (isMobile) {
                card.style.display = index === currentService ? 'block' : 'none';
            } else {
                card.style.display = 'block'; // Show all on desktop
            }
        });

        if (isMobile) {
            updateServiceIndicators();
        }
    };

    const updateServiceIndicators = () => {
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
    updateView();
}

function initTestimonialCarousel() {
    const testimonialItems = document.querySelectorAll('[data-testimonial-item]');
    if (testimonialItems.length === 0) return;

    let currentTestimonial = 0;

    const updateTestimonialDisplay = () => {
        testimonialItems.forEach((item, index) => {
            if (index === currentTestimonial) {
                item.classList.remove('hidden');
                setTimeout(() => item.classList.remove('opacity-0'), 50); // Fade in
            } else {
                item.classList.add('opacity-0');
                setTimeout(() => item.classList.add('hidden'), 300); // Hide after fade out
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

    document.querySelector('[data-testimonial-next]')?.addEventListener('click', nextTestimonial);
    document.querySelector('[data-testimonial-prev]')?.addEventListener('click', prevTestimonial);

    setInterval(nextTestimonial, 5000);
    updateTestimonialDisplay();
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const offset = window.innerWidth < 768 ? 64 : 80; // Mobile vs Desktop navbar height
                window.scrollTo({
                    top: target.offsetTop - offset,
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
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active-link-style');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active-link-style');
                    }
                });
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
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

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initServiceCarousel();
    initTestimonialCarousel();
    initSmoothScroll();
    initActiveNavLink();
    initIcons();
    initFormHandling();
    initScrollReveal();
    console.log('✓ All functions initialized successfully');
});

window.addEventListener('load', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
