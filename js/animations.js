/**
 * ============================================
 * BelanjaKita — Premium Animation Engine
 * ============================================
 * Scroll reveal, ripple, tilt, toast, counters,
 * parallax, typing, particles, confetti, and more.
 * ============================================
 */

(function () {
    'use strict';

    // ==========================================
    // 1. SCROLL REVEAL (IntersectionObserver)
    // ==========================================
    function initScrollReveal() {
        const elements = document.querySelectorAll('[data-animate]');
        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = parseInt(el.getAttribute('data-delay')) || 0;
                    setTimeout(() => {
                        el.classList.add('animated');
                    }, delay);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        elements.forEach(el => observer.observe(el));
    }

    // ==========================================
    // 2. GLASSMORPHISM NAVBAR ON SCROLL
    // ==========================================
    function initNavbarGlass() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        function onScroll() {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ==========================================
    // 3. RIPPLE EFFECT ON BUTTONS
    // ==========================================
    function initRipple() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn, .icon-btn, .quick-action-card');
            if (!btn) return;

            const wave = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;

            // Apply all styles directly — don't rely on CSS parent selector
            wave.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.35);
                transform: scale(0);
                pointer-events: none;
                width: ${size}px;
                height: ${size}px;
                left: ${e.clientX - rect.left - size / 2}px;
                top: ${e.clientY - rect.top - size / 2}px;
                animation: rippleAnim 0.6s ease-out forwards;
            `;

            // Ensure parent can contain the absolute ripple
            const prevPosition = btn.style.position;
            const prevOverflow = btn.style.overflow;
            if (!getComputedStyle(btn).position || getComputedStyle(btn).position === 'static') {
                btn.style.position = 'relative';
            }
            btn.style.overflow = 'hidden';

            btn.appendChild(wave);

            // Clean up after animation — restore original styles
            setTimeout(() => {
                wave.remove();
                if (!prevPosition) btn.style.position = '';
                if (!prevOverflow) btn.style.overflow = '';
            }, 600);
        });
    }

    // ==========================================
    // 4. ANIMATED COUNTER
    // ==========================================
    window.animateCounter = function (el, target, prefix, suffix, duration) {
        prefix = prefix || '';
        suffix = suffix || '';
        duration = duration || 1200;
        const start = performance.now();
        const startVal = 0;

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (target - startVal) * eased);
            el.textContent = prefix + current.toLocaleString('id-ID') + suffix;
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    };

    // ==========================================
    // 5. TOAST NOTIFICATION SYSTEM
    // ==========================================
    function getOrCreateToastContainer() {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        return container;
    }

    window.showToast = function (message, type, title, duration) {
        type = type || 'success';
        title = title || (type === 'success' ? 'Berhasil!' : type === 'error' ? 'Error!' : type === 'warning' ? 'Perhatian!' : 'Info');
        duration = duration || 3000;

        const container = getOrCreateToastContainer();

        const iconMap = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-icon ${type}">${iconMap[type]}</div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" onclick="this.closest('.toast').remove()">×</button>
            <div class="toast-progress"></div>
        `;
        toast.style.position = 'relative';

        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 400);
        }, duration);
    };

    // ==========================================
    // 6. 3D TILT EFFECT ON CARDS
    // ==========================================
    function initTiltCards() {
        const cards = document.querySelectorAll('.product-card, .article-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // ==========================================
    // 7. TYPING EFFECT
    // ==========================================
    window.typeText = function (element, text, speed) {
        speed = speed || 50;
        element.textContent = '';
        element.classList.add('typing-cursor');
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => element.classList.remove('typing-cursor'), 1000);
            }
        }
        type();
    };

    // ==========================================
    // 8. PARALLAX SCROLLING
    // ==========================================
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        if (!parallaxElements.length) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
                el.style.transform = `translateY(${scrollY * speed}px)`;
            });
        }, { passive: true });
    }

    // ==========================================
    // 9. STAGGER GRID ITEMS
    // ==========================================
    window.staggerItems = function (container, selector) {
        selector = selector || ':scope > *';
        const items = container.querySelectorAll(selector);
        items.forEach((item, i) => {
            item.classList.add('stagger-item');
            item.style.animationDelay = (i * 0.08) + 's';
        });
    };

    // ==========================================
    // 10. CONFETTI EFFECT
    // ==========================================
    window.showConfetti = function (duration) {
        duration = duration || 3000;
        const container = document.createElement('div');
        container.className = 'confetti-container';
        document.body.appendChild(container);

        const colors = ['#00B14F', '#0D6EFD', '#8b5cf6', '#FFC107', '#ec4899', '#f59e0b', '#DC3545'];

        for (let i = 0; i < 80; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
            piece.style.animationDelay = (Math.random() * 0.8) + 's';
            piece.style.width = (Math.random() * 8 + 5) + 'px';
            piece.style.height = (Math.random() * 8 + 5) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            container.appendChild(piece);
        }

        setTimeout(() => container.remove(), duration + 1000);
    };

    // ==========================================
    // 11. PARTICLE BACKGROUND (Canvas)
    // ==========================================
    window.initParticles = function (canvasId) {
        const canvas = document.getElementById(canvasId || 'particle-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const particles = [];
        const count = 40;

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 120)})`;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(draw);
        }
        draw();
    };

    // ==========================================
    // 12. BACK TO TOP BUTTON
    // ==========================================
    function initBackToTop() {
        const btn = document.createElement('button');
        btn.className = 'back-to-top';
        btn.innerHTML = '↑';
        btn.setAttribute('aria-label', 'Back to top');
        btn.title = 'Kembali ke atas';
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // 13. SMOOTH PAGE TRANSITIONS
    // ==========================================
    function initPageTransitions() {
        const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([onclick])');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:') || href === '#') return;

                if (link.hostname === window.location.hostname || !link.hostname) {
                    e.preventDefault();
                    document.body.classList.add('page-exit');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
                }
            });
        });
    }

    // ==========================================
    // 14. IMAGE LAZY ENTRANCE
    // ==========================================
    function initImageEntrance() {
        const images = document.querySelectorAll('.product-img, .article-img');
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.addEventListener('load', () => { img.style.opacity = '1'; });
                img.addEventListener('error', () => { img.style.opacity = '1'; });
            }
        });
    }

    // ==========================================
    // 15. AMBIENT PARTICLES (Subtle bg — all pages)
    // ==========================================
    function initAmbientParticles() {
        // Skip if login page already has full particle canvas
        if (document.getElementById('particle-canvas')) return;
        // Skip if on auth pages (they have their own bg)
        if (document.querySelector('.auth-wrapper')) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'ambient-particles';
        document.body.prepend(canvas);
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Very few particles — subtle!
        const particles = [];
        const count = 18;
        const colors = [
            { r: 0, g: 177, b: 79 },    // green
            { r: 13, g: 110, b: 253 },   // blue
            { r: 139, g: 92, b: 246 },   // purple
        ];

        for (let i = 0; i < count; i++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.15,   // very slow
                vy: (Math.random() - 0.5) * 0.15,
                radius: Math.random() * 2.5 + 1,
                color: color,
                opacity: Math.random() * 0.06 + 0.03, // 3-9% opacity — barely visible
                pulseSpeed: Math.random() * 0.003 + 0.001,
                pulseOffset: Math.random() * Math.PI * 2
            });
        }

        let time = 0;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 1;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges smoothly
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                // Gentle pulse
                const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset);
                const currentOpacity = p.opacity + pulse * 0.02;
                const currentRadius = p.radius + pulse * 0.5;

                ctx.beginPath();
                ctx.arc(p.x, p.y, Math.max(currentRadius, 0.5), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.max(currentOpacity, 0)})`;
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }
        draw();
    }

    // ==========================================
// INIT ALL ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initNavbarGlass();
    initRipple();
    initTiltCards();
    initParallax();
    initBackToTop();
    initPageTransitions();
    initImageEntrance();
    initAmbientParticles();

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Expose a reinit function so pages that inject content dynamically
// (e.g. product cards loaded via JS after DOMContentLoaded) can
// re-apply scroll reveal, tilt, page-transition, and image-entrance
// animations to the new elements.
window.reinitAnimations = function () {
    initScrollReveal();
    initTiltCards();
    initPageTransitions();
    initImageEntrance();
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    };

})();
