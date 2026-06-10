document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Modal Logic
    const openModalBtns = document.querySelectorAll('[data-open-modal]');
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');
    
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-open-modal');
            document.getElementById(modalId).classList.add('active');
        });
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.closest('.modal').classList.remove('active');
        });
    });

    // Quantity Logic
    const qtyControls = document.querySelectorAll('.qty-control');
    qtyControls.forEach(control => {
        const minus = control.querySelector('.qty-btn:first-child');
        const plus = control.querySelector('.qty-btn:last-child');
        const input = control.querySelector('.qty-input');

        if(minus && plus && input) {
            minus.addEventListener('click', () => {
                let val = parseInt(input.value);
                if (val > 1) input.value = val - 1;
            });
            plus.addEventListener('click', () => {
                let val = parseInt(input.value);
                input.value = val + 1;
            });
        }
    });
    // Page Transition Logic
    const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
            
            if (link.hostname === window.location.hostname || !link.hostname) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
});
