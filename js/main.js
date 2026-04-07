// Main JavaScript for OpenSystemClasses Website
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
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

    // Add animation classes to elements as they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Run animation check on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Mobile menu toggle (if we add hamburger menu later)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        });
    }

    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = function() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = width + '%';
            }
        });
    };

    // Animate progress bars when they come into view
    const progressBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                progressBarObserver.unobserve(entry.target);
            }
        });
    });

    progressBars.forEach(bar => {
        progressBarObserver.observe(bar);
    });

    // Add current year to copyright
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2024', currentYear);
    }

    // Add tooltips to tech icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        const title = icon.getAttribute('title');
        if (title) {
            icon.setAttribute('aria-label', title);
        }
    });

    console.log('OpenSystemClasses website initialized successfully! 🚀');
});

// Utility function to add delay classes for staggered animationsunction addDelayClasses() {
    const animateElements = document.querySelectorAll('.animate');
    animateElements.forEach((element, index) => {
        const delay = (index % 4) + 1;
        element.classList.add(`delay-${delay}`);
    });
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', addDelayClasses);
