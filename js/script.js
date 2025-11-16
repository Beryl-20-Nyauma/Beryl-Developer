// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Progress Bar Animation on Scroll
window.addEventListener('scroll', () => {
    const progressBar = document.querySelector('.progress-bar');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
});

// Page Dots Navigation
const dots = document.querySelectorAll('.dot');
const pages = [
    'index.html', 
    'pages/about.html', 
    'pages/education.html', 
    'pages/experience.html', 
    'pages/projects.html',
    'pages/contact.html'
];

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Update active dot
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        // Navigate to page
        window.location.href = pages[index];
    });
});

// Set active dot based on current page
function setActiveDot() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    dots.forEach((dot, index) => {
        const pageName = pages[index].split('/').pop();
        if (currentPage === pageName) {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        }
    });
}

// Set active navigation link
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links li a');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentPath.includes(href)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect for Hero Image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const scrolled = window.scrollY;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    setActiveDot();
    setActiveNavLink();
});

// Add subtle fade-in animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in class (you can add this class to elements)
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});