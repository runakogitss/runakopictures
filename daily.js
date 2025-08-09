// Daily Life Gallery JavaScript

// Image data for Daily Life gallery - Each image has a unique ID matching its onclick handler
const dailyImages = {
    'DSC05761': {
        id: 'DSC05761',
        src: 'pics/daily life/new pics/DSC05761.JPG',
        alt: 'Daily Moments',
        title: 'Last Moment at High School',
        description: 'Ah yes, the last times of high school.'
    },
    'DSC03781': {
        id: 'DSC03781',
        src: 'pics/daily life/new pics/DSC03781.JPG',
        alt: 'Life Moments',
        title: 'Cool Portraits!',
        description: 'Kinda like the jacket tho + the glasses too.'
    },
    'DSC03824': {
        id: 'DSC03824',
        src: 'pics/daily life/new pics/DSC03824.JPG',
        alt: 'Group Moments',
        title: 'The Reliable Drink, Pocari Sweet.',
        description: 'When the weather is hot, There is a drink where you can rely on.'
    },
    'byruchan': {
        id: 'byruchan',
        src: 'pics/daily life/new pics/byruchan.JPG',
        alt: 'Portrait',
        title: 'I Don\'t Mess with Him.',
        description: 'If I were you, I wouldn\'t mess with him. He seems like he is gonna knock off like Mikey would do on a one shot kick.'
    },
    'kevingoat': {
        id: 'kevingoat',
        src: 'pics/daily life/new pics/kevingoat.JPG',
        alt: 'Friendship',
        title: '@kevin_hore the GOAT',
        description: 'I can believe that Sir Kevin nailed it. His costume plays are always this epic! But uhh.. Mr Aris? He saw me through the camera >_<'
    },
    'DSC03864': {
        id: 'DSC03864',
        src: 'pics/daily life/new pics/DSC03864.JPG',
        alt: 'Life Scenes',
        title: 'Girls Squad',
        description: 'I don\'t get it why.. This picture looks appealing for no reason. Is it because of the twins? Well maybe one of them catch my eye.'
    },
    'best-buddy-raph': {
        id: 'best-buddy-raph',
        src: 'pics/daily life/new pics/best buddy raph.JPG',
        alt: 'Best Friends',
        title: 'Good Old Raph.',
        description: 'He seems like a chill guy. That is why he is so blessed.'
    },
    'waifu': {
        id: 'waifu',
        src: 'pics/daily life/new pics/waifu.JPG',
        alt: 'Special Moments',
        title: 'Special Connection',
        description: 'That dreamy feels, It bring feelings for people who are really really.. Wait what?'
    },
    'DSC02384': {
        id: 'DSC02384',
        src: 'pics/daily life/new pics/DSC02384.JPG',
        alt: 'Portrait Study',
        title: 'I kinda like this Sepia colored.',
        description: 'I kinda like this, this color looks appealing. Yeah, I like it. Kinda a good reference.'
    },
    'timnas': {
        id: 'timnas',
        src: 'pics/daily life/new pics/timnas.JPG',
        alt: 'Team Spirit',
        title: 'The Wild Card',
        description: 'One of the most interesting players in Doa Ibu Football Club. Currently he joins Napza Football Club. Seems trustworthy for an ace player.'
    },
    'dragon': {
        id: 'dragon',
        src: 'pics/daily life/new pics/dragon.jpg',
        alt: 'Dragon Dance Storm',
        title: 'Storm Clouds Dance',
        description: 'Silk scales ripple like storm clouds—drumbeats move the dragon, weaving luck through trembling streets.'
    },
    'dragon-two': {
        id: 'dragon-two',
        src: 'pics/daily life/new pics/dragon two.jpg',
        alt: 'Dragon Ancestral Spirit',
        title: 'Ancestral Breath',
        description: 'A hundred hands lift the dragon—ancestors\' breath in its spine, dancing defiance against time.'
    },

    'bryan-suka-lanang': {
        id: 'bryan-suka-lanang',
        src: 'pics/daily life/new pics/Bryan Suka Lanang ini.jpg',
        alt: 'Character Moments',
        title: 'Three Cool Macho Men.',
        description: 'Three men. On the left was the biggest man of the world. The middle one was so astonishing from it\'s looks. And the left one? Oh he seems gonna kill you right now >_<'
    },
    'nice-try': {
        id: 'nice-try',
        src: 'pics/daily life/new pics/nice try.jpg',
        alt: 'Playful Moments',
        title: 'Wait What?',
        description: 'Since when Hoyoverse added a new Genshin Character? I can\'t believe it. This is why people won\'t stop gambling for this character.'
    },
    'ambatunat': {
        id: 'ambatunat',
        src: 'pics/daily life/new pics/AMBATUNAT.png',
        alt: 'Fun Moments',
        title: 'A New Ronaldo??',
        description: 'Can\'t Believe that he is going to go all out just like Ronaldo. Wait what?'
    },
    'edited-dsc': {
        id: 'edited-dsc',
        src: 'pics/daily life/new pics/Edited DSC BBeuhhhhh.JPG',
        alt: 'Edited Memories',
        title: 'Don\'t Look Back in Anger',
        description: 'And so Sally can wait, she knows it\'s too late as we\'re walking on by. Her soul slides away, "But don\'t look back in anger," I heard you say.'
    },
    'DSC05120': {
        id: 'DSC05120',
        src: 'pics/daily life/new pics/20250214-DSC05120.JPG',
        alt: 'Recent Memories',
        title: 'March 7th Cosplayer',
        description: 'Since when March 7th get a cosplayer glowup? Can\'t believe it..'
    }
};

// Global variables
let currentSection = 'home';
let isMenuOpen = false;
let lightboxImage = null;
let lightboxIndex = 0;
let allImages = Object.values(dailyImages);

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
    const imageUrls = Object.values(dailyImages).map(img => img.src);

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
        const sections = document.querySelectorAll('section[class*="daily"]');
        let currentId = 'daily-hero';

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
    const image = dailyImages[imageId];
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
    const images = document.querySelectorAll('.daily-grid-item img');

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