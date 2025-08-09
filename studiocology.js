// Studiocology Gallery JavaScript

// Image data for Studiocology gallery - Each image has a unique ID matching its onclick handler
const studiocologyImages = {
    'DSC04004': {
        id: 'DSC04004',
        src: 'pics/studiocology/studiocology pics/DSC04004.png',
        alt: 'Creative Collaboration',
        title: 'Enthusiast Learners..',
        description: 'Kids like these are quite enthusiast. Could we realize the Indonesia Emas 2045 Dreams?'
    },
    'DSC04028': {
        id: 'DSC04028',
        src: 'pics/studiocology/studiocology pics/DSC04028.png',
        alt: 'Educational Excellence',
        title: 'Learning Together',
        description: 'Collaborative learning that inspires creativity. Students working together to achieve educational excellence through innovative approaches and shared knowledge.'
    },
    'DSC04037': {
        id: 'DSC04037',
        src: 'pics/studiocology/studiocology pics/DSC04037.png',
        alt: 'Studio Environment',
        title: 'Studio Atmosphere',
        description: 'The creative space where ideas come to life. Our studio environment fosters innovation and provides the perfect setting for educational collaboration.'
    },
    'DSC04040': {
        id: 'DSC04040',
        src: 'pics/studiocology/studiocology pics/DSC04040.png',
        alt: 'Creative Process',
        title: 'Moments of Learning',
        description: 'Sometimes these are the moments when we are learning something new.'
    },
    'DSC04049': {
        id: 'DSC04049',
        src: 'pics/studiocology/studiocology pics/DSC04049.png',
        alt: 'Collaborative Work',
        title: 'Trial and Error',
        description: 'Ok umm... how do we execute this? Isn\'t this suppose to be like this?? or Isn\'t this suppose to be like that??'
    },
    'DSC04062': {
        id: 'DSC04062',
        src: 'pics/studiocology/studiocology pics/DSC04062.png',
        alt: 'Educational Materials',
        title: 'The Momentum',
        description: 'Did it work??'
    },
    'DSC04078': {
        id: 'DSC04078',
        src: 'pics/studiocology/studiocology pics/DSC04078.png',
        alt: 'Student Engagement',
        title: 'Group Pictures!',
        description: 'Don\'t forget about this moment! Take a picture!'
    },
    'DSC04081': {
        id: 'DSC04081',
        src: 'pics/studiocology/studiocology pics/DSC04081.png',
        alt: 'Creative Expression',
        title: 'Observe and Analyze',
        description: 'When you observe well, you may analyze some interesting points inside. Why don\'t you try?'
    },
    'DSC04086': {
        id: 'DSC04086',
        src: 'pics/studiocology/studiocology pics/DSC04086.png',
        alt: 'Workshop Activity',
        title: 'Better Listen to the Teacher!',
        description: 'Well you know, the teacher was explaining about how magnet works. You better listen to her or unless.... You wouldn\'t know.'
    },
    'DSC04094': {
        id: 'DSC04094',
        src: 'pics/studiocology/studiocology pics/DSC04094.png',
        alt: 'Creative Results',
        title: 'How does this Works..',
        description: 'Tell me how to make this lava lamp making works.. I\'m so interested..'
    },
    'DSC04103': {
        id: 'DSC04103',
        src: 'pics/studiocology/studiocology pics/DSC04103.png',
        alt: 'Learning Environment',
        title: 'Helping One Another',
        description: 'For a better purpose, lets help our friends for one another!'
    },
    'DSC04123': {
        id: 'DSC04123',
        src: 'pics/studiocology/studiocology pics/DSC04123.png',
        alt: 'Educational Innovation',
        title: 'Time for Some Action!',
        description: 'Well since both of the teachers has explained to us.. Why don\'t we try it out?'
    },
    'DSC04127': {
        id: 'DSC04127',
        src: 'pics/studiocology/studiocology pics/DSC04127.png',
        alt: 'Collaborative Success',
        title: 'Helpful Assistant',
        description: 'Do you need some help? Here I am! I\'ll help you out!'
    },
    'DSC04166': {
        id: 'DSC04166',
        src: 'pics/studiocology/studiocology pics/DSC04166.png',
        alt: 'Creative Community',
        title: 'A Small Discussion',
        description: 'When it comes to a discussion, sometimes it takes a whispering to spark a plan right?'
    },
    'DSC04172': {
        id: 'DSC04172',
        src: 'pics/studiocology/studiocology pics/DSC04172.png',
        alt: 'Educational Journey',
        title: 'Best Moments',
        description: 'Don\'t forget about today because tommorow this will be a story to be telled.'
    }
};

// Global variables
let currentSection = 'home';
let isMenuOpen = false;
let lightboxImage = null;
let lightboxIndex = 0;
let allImages = Object.values(studiocologyImages);

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Set up scroll listener for navigation
    setupScrollListener();

    // Set up keyboard listeners
    setupKeyboardListeners();

    // Preload images for better performance
    preloadImages();

    // Initialize smooth image loading
    initializeImageLoading();

    // Add page transition effect
    document.body.style.opacity = '1';
});

// Preload images for faster loading
function preloadImages() {
    const imageUrls = Object.values(studiocologyImages).map(img => img.src);

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        // Optional: Add loading states
        img.onload = function () {
            console.log(`Preloaded: ${url}`);
        };
        img.onerror = function () {
            console.warn(`Failed to preload: ${url}`);
        };
    });
}

// Navigation functions
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
        const sections = document.querySelectorAll('section[class*="studiocology"]');
        let currentId = 'studiocology-hero';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentId = section.className;
            }
        });

        setCurrentSection(currentId);
    };

    window.addEventListener('scroll', handleScroll);
}

function setCurrentSection(sectionId) {
    if (currentSection === sectionId) return;
    currentSection = sectionId;
}

// Lightbox functions
function openLightbox(imageId) {
    const image = studiocologyImages[imageId];
    if (!image) return;

    const index = allImages.findIndex(img => img.id === imageId);
    lightboxImage = image;
    lightboxIndex = index;

    updateLightboxContent(true); // Skip transition for initial load
    showLightbox();
}

function closeLightbox() {
    hideLightbox();
    lightboxImage = null;
}

function navigateLightbox(direction) {
    if (allImages.length === 0) return;

    const newIndex = direction === 'next'
        ? (lightboxIndex + 1) % allImages.length
        : (lightboxIndex - 1 + allImages.length) % allImages.length;

    // Start slide transition
    slideToImage(newIndex, direction);
}

function updateLightboxContent(skipTransition = false) {
    if (!lightboxImage) return;

    const lightboxImageEl = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxCounter = document.getElementById('lightbox-counter');

    if (skipTransition) {
        // Direct update without animation (for initial load)
        lightboxImageEl.src = lightboxImage.src;
        lightboxImageEl.alt = lightboxImage.alt;
        lightboxTitle.textContent = lightboxImage.title;
        lightboxDescription.textContent = lightboxImage.description;
    }

    if (allImages.length > 1) {
        lightboxCounter.textContent = `${lightboxIndex + 1} of ${allImages.length}`;
        lightboxCounter.style.display = 'block';

        // Show navigation buttons
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';
    } else {
        lightboxCounter.style.display = 'none';

        // Hide navigation buttons
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    }
}

// New slide transition function
function slideToImage(newIndex, direction) {
    const lightboxImageEl = document.getElementById('lightbox-image');
    const lightboxInfo = document.querySelector('.lightbox-info');

    // Prevent multiple transitions
    if (lightboxImageEl.classList.contains('slide-out-left') ||
        lightboxImageEl.classList.contains('slide-out-right')) {
        return;
    }

    // Start slide out animation
    const slideOutClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
    const slideInClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';

    // Fade out info
    lightboxInfo.classList.add('fade-out');

    // Slide out current image
    lightboxImageEl.classList.add(slideOutClass);

    setTimeout(() => {
        // Update data
        lightboxIndex = newIndex;
        lightboxImage = allImages[newIndex];

        // Update image source and info
        lightboxImageEl.src = lightboxImage.src;
        lightboxImageEl.alt = lightboxImage.alt;

        // Update info content
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDescription = document.getElementById('lightbox-description');
        const lightboxCounter = document.getElementById('lightbox-counter');

        lightboxTitle.textContent = lightboxImage.title;
        lightboxDescription.textContent = lightboxImage.description;
        lightboxCounter.textContent = `${lightboxIndex + 1} of ${allImages.length}`;

        // Reset classes and prepare for slide in
        lightboxImageEl.classList.remove(slideOutClass);
        lightboxImageEl.classList.add(slideInClass);

        // Force reflow
        lightboxImageEl.offsetHeight;

        // Slide in new image
        lightboxImageEl.classList.remove(slideInClass);
        lightboxImageEl.classList.add('slide-active');

        // Fade in info
        lightboxInfo.classList.remove('fade-out');
        lightboxInfo.classList.add('fade-in');

        // Clean up classes after animation
        setTimeout(() => {
            lightboxImageEl.classList.remove('slide-active');
            lightboxInfo.classList.remove('fade-in');
        }, 400);

    }, 200); // Half of the transition duration
}

function showLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Initialize mobile features
    if (isMobileDevice()) {
        const indicator = document.querySelector('.mobile-swipe-indicator');

        if (indicator) {
            indicator.style.display = 'block';
            indicator.style.opacity = '0.7';
        }

        hideMobileIndicator();
    }

    // Trigger reflow to ensure transition works
    lightbox.offsetHeight;
}

function hideLightbox() {
    const lightbox = document.getElementById('lightbox');

    // Add fade out transition
    setTimeout(() => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    }, 50);
}

// Keyboard event handlers
function setupKeyboardListeners() {
    document.addEventListener('keydown', function (event) {
        if (!lightboxImage) return;

        // Prevent navigation during transitions
        const lightboxImageEl = document.getElementById('lightbox-image');
        if (lightboxImageEl && (lightboxImageEl.classList.contains('slide-out-left') ||
            lightboxImageEl.classList.contains('slide-out-right'))) {
            return;
        }

        switch (event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                navigateLightbox('prev');
                break;
            case 'ArrowRight':
                event.preventDefault();
                navigateLightbox('next');
                break;
        }
    });
}

// Initialize smooth image loading
function initializeImageLoading() {
    const images = document.querySelectorAll('.studiocology-grid-item img');

    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function () {
                this.classList.add('loaded');
            });
        }
    });
}

// Add smooth page transitions
function navigateToPage(url) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Click outside lightbox to close
document.addEventListener('click', function (event) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');

    if (event.target === lightbox && lightboxContent && !lightboxContent.contains(event.target)) {
        closeLightbox();
    }
});

// Add smooth scrolling for anchor links
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

// Enhanced touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let isSwiping = false;
let isReadingMode = false;

document.addEventListener('touchstart', function (event) {
    if (!lightboxImage) return;

    const touch = event.changedTouches[0];
    touchStartX = touch.screenX;
    touchStartY = touch.screenY;
    isSwiping = false;

    // Hide swipe indicator after first interaction
    const indicator = document.querySelector('.mobile-swipe-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
});

document.addEventListener('touchmove', function (event) {
    if (!lightboxImage) return;

    const touch = event.changedTouches[0];
    const deltaX = Math.abs(touch.screenX - touchStartX);
    const deltaY = Math.abs(touch.screenY - touchStartY);

    // Determine if this is a horizontal swipe
    if (deltaX > deltaY && deltaX > 10) {
        isSwiping = true;
        event.preventDefault(); // Prevent scrolling
    }
});

document.addEventListener('touchend', function (event) {
    if (!lightboxImage || !isSwiping) return;

    const touch = event.changedTouches[0];
    touchEndX = touch.screenX;
    touchEndY = touch.screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    const verticalDistance = Math.abs(touchEndY - touchStartY);

    // Only process horizontal swipes
    if (verticalDistance > 100) return;

    // Prevent swipe during transitions
    const lightboxImageEl = document.getElementById('lightbox-image');
    if (lightboxImageEl && (lightboxImageEl.classList.contains('slide-out-left') ||
        lightboxImageEl.classList.contains('slide-out-right'))) {
        return;
    }

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - go to previous image
            navigateLightbox('prev');
        } else {
            // Swipe left - go to next image
            navigateLightbox('next');
        }
    }
}

// Mobile-specific lightbox enhancements
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Auto-hide mobile swipe indicator
function hideMobileIndicator() {
    setTimeout(() => {
        const indicator = document.querySelector('.mobile-swipe-indicator');
        if (indicator && isMobileDevice()) {
            indicator.style.opacity = '0';
            setTimeout(() => {
                indicator.style.display = 'none';
            }, 2000);
        }
    }, 4000);
}