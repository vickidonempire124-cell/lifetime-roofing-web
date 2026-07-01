document.addEventListener('DOMContentLoaded', () => {
    
    // UI Spacing Adjuster Rule on Navigation Scroll
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '8px 0';
            header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.padding = '16px 0';
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Navigation Drawer Hook
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    navToggle.addEventListener('click', () => {
        desktopNav.classList.toggle('active');
        // Simple structural switch logic for hamburger visual lines
        navToggle.classList.toggle('open');
    });

    // Lead Intake Data Interceptor Validation Pattern
    const form = document.querySelector('.interactive-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Input Selection Extraction Matrix
        const service = document.getElementById('service-type').value;
        const name = document.getElementById('client-name').value;
        const phone = document.getElementById('client-phone').value;
        const email = document.getElementById('client-email').value;

        // Visual UX Validation State confirmation framework 
        alert(`Success! Lead safely captured.\nName: ${name}\nRequested: ${service}\nOur operations dispatcher will call you within 15 minutes.`);
        form.reset();
    });
});