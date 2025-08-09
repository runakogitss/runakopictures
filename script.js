// Simplified script for portfolio website

// Global variables
let currentSection = 'home';
let isMenuOpen = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Set up scroll listener for navigation
    setupScrollListener();
    
    // Initialize feature cards
    initFeatureCards();
});

// Navigation functions
function scrollToSection(sectionId) {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
}

function setIsMenuOpen(open) {
    isMenuOpen = open;
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (isMenuOpen) {
        mobileNav.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

function setupScrollListener() {
    const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        let currentId = 'home';
        
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentId = section.id;
            }
        });
        
        setCurrentSection(currentId);
    };

    window.addEventListener('scroll', handleScroll);
}

function setCurrentSection(sectionId) {
    if (currentSection === sectionId) return;
    
    currentSection = sectionId;
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Feature card interactions
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        // Add staggered animation on load
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            
            // Add glow effect to other cards
            featureCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.style.opacity = '0.7';
                    otherCard.style.transform = 'scale(0.98)';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            // Reset other cards
            featureCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
                otherCard.style.transform = 'scale(1)';
            });
        });
        
        // Add click handler for the entire card
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('feature-btn')) {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    scrollToSection('contact');
                }, 150);
            }
        });
    });
}



// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = function(target) {
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };

    // Override scrollToSection for older browsers
    const originalScrollToSection = window.scrollToSection;
    window.scrollToSection = function(sectionId) {
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            smoothScrollPolyfill(element);
        }
    };
}