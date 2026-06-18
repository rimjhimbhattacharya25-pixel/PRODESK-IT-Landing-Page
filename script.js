document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // THEME CONTROLLER (DARK / LIGHT MODE)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyEl = document.body;

    // Check if the user previously selected light or dark mode
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        if (savedTheme === 'light') {
            bodyEl.classList.remove('dark-theme');
        } else {
            bodyEl.classList.add('dark-theme');
        }
    } else {
        // Defaulting to premium dark theme
        bodyEl.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }

    // Toggle theme on click
    themeToggleBtn.addEventListener('click', () => {
        if (bodyEl.classList.contains('dark-theme')) {
            bodyEl.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            bodyEl.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==========================================================================
    // MOBILE NAVIGATION DRAWER
    // ==========================================================================
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navMenuEl = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Show/hide menu on click
    menuToggleBtn.addEventListener('click', () => {
        menuToggleBtn.classList.toggle('active');
        navMenuEl.classList.toggle('active');
    });

    // Automatically close mobile menu when you click a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggleBtn.classList.remove('active');
            navMenuEl.classList.remove('active');
        });
    });

    // ==========================================================================
    // ACTIVE NAV LINK HIGHLIGHTER ON SCROLL
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120; // 120px offset to account for navbar height
            const sectionId = section.getAttribute('id');
            const navLinkEl = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (navLinkEl) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav-menu a.active')?.classList.remove('active');
                    navLinkEl.classList.add('active');
                }
            }
        });
    });
});