// Japan Gallery JavaScript

// Image data for Japan gallery - Each image has a unique ID matching its onclick handler
const japanImages = {
    'fujisan': {
        id: 'fujisan',
        src: 'pics/japan trip/japan trip watermark/fujisan.JPG',
        alt: 'Mount Fuji sacred mountain view with majestic snow-capped peak',
        title: 'Mount Fuji Majesty',
        description: 'Japan\'s most sacred mountain rises majestically against the sky, its snow-capped peak embodying the spiritual essence and timeless beauty that defines the Land of the Rising Sun. A symbol of endurance and natural perfection.'
    },
    'DSC05954': {
        id: 'DSC05954',
        src: 'pics/japan trip/japan trip watermark/DSC05954.JPG',
        alt: 'Bustling Namba district streets with neon signs and urban life',
        title: 'Streets of Namba',
        description: 'The vibrant streets of Namba pulse with energy as neon lights illuminate the bustling crowds. This iconic Osaka district perfectly captures the electric atmosphere of modern Japanese urban life, where tradition meets contemporary culture.'
    },
    'DSC05993': {
        id: 'DSC05993',
        src: 'pics/japan trip/japan trip watermark/DSC05993.JPG',
        alt: 'Den Den Town Nipponbashi electronics district with anime culture',
        title: 'Den Den Town Nipponbashi',
        description: 'Osaka\'s electronics and anime paradise comes alive in Den Den Town, where otaku culture thrives among towering displays of manga, electronics, and collectibles. A modern shrine to Japan\'s pop culture phenomenon.'
    },
    'DSC06013': {
        id: 'DSC06013',
        src: 'pics/japan trip/japan trip watermark/DSC06013.JPG',
        alt: 'Giant mechanical crab sign of Kani Doraku restaurant in Osaka',
        title: 'Osaka Crab King!',
        description: 'The legendary giant crab of Kani Doraku waves its mechanical claws above Dotonbori, becoming an iconic symbol of Osaka\'s playful spirit and world-renowned culinary culture. A must-see landmark that embodies the city\'s fun-loving character.'
    },
    'DSC06015': {
        id: 'DSC06015',
        src: 'pics/japan trip/japan trip watermark/DSC06015.JPG',
        alt: 'Michelin-starred takoyaki restaurant signs in Osaka food district',
        title: 'Michellin Takoyaki Signs',
        description: 'Prestigious Michelin recognition meets street food tradition as takoyaki signs proudly display their culinary achievements. These markers represent the elevation of humble octopus balls to gourmet status, showcasing Japan\'s dedication to culinary excellence.'
    },
    'DSC06020': {
        id: 'DSC06020',
        src: 'pics/japan trip/japan trip watermark/DSC06020.JPG',
        alt: 'Oversized takoyaki restaurant sign with cartoon octopus character',
        title: 'A Big Takoyaki Sign',
        description: 'A massive takoyaki sign dominates the streetscape with its cheerful cartoon octopus, inviting passersby to experience Osaka\'s most beloved street food. The playful design reflects the joy and community spirit surrounding this iconic local delicacy.'
    },
    'DSC06025': {
        id: 'DSC06025',
        src: 'pics/japan trip/japan trip watermark/DSC06025.JPG',
        alt: 'Colorful neon advertising signs along Dotonbori entertainment district',
        title: 'Dotonbori Signs',
        description: 'The dazzling neon wonderland of Dotonbori creates a kaleidoscope of colors and characters, each sign competing for attention in Osaka\'s most famous entertainment district. This visual symphony represents the exuberant energy of Japanese commercial artistry.'
    },
    'DSC06064': {
        id: 'DSC06064',
        src: 'pics/japan trip/japan trip watermark/DSC06064.JPG',
        alt: 'Colorful cruise boat with party decorations on Dotonbori river',
        title: 'Wonder Cruise Party!',
        description: 'A festively decorated cruise boat glides along the Dotonbori River, its vibrant colors and party atmosphere adding to the district\'s celebratory mood. These floating celebrations bring joy to both passengers and spectators along the famous waterway.'
    },
    'DSC06066': {
        id: 'DSC06066',
        src: 'pics/japan trip/japan trip watermark/DSC06066.JPG',
        alt: 'Asahi Super Dry beer advertisement signs in Dotonbori district',
        title: 'Super Dry Asahi Signs',
        description: 'The iconic Asahi Super Dry signs illuminate the night, representing Japan\'s beer culture and the social traditions that bring people together. These advertisements have become landmarks in their own right, part of Dotonbori\'s visual identity.'
    },
    'DSC06075': {
        id: 'DSC06075',
        src: 'pics/japan trip/japan trip watermark/DSC06075.JPG',
        alt: 'Shinsaibashi shopping district with luxury brands and crowds',
        title: 'Osaka\'s Shinsaibashi Suji',
        description: 'The prestigious Shinsaibashi shopping district buzzes with activity as luxury brands and local boutiques line the covered arcade. This retail paradise represents the sophisticated side of Osaka\'s consumer culture and fashion consciousness.'
    },
    'DSC06100': {
        id: 'DSC06100',
        src: 'pics/japan trip/japan trip watermark/DSC06100.JPG',
        alt: 'Path leading to Osaka Castle through traditional Japanese gardens',
        title: 'Walking to the Castle',
        description: 'The anticipation builds as visitors walk the traditional path toward Osaka Castle, surrounded by carefully manicured gardens and historical atmosphere. Each step brings you closer to one of Japan\'s most magnificent architectural treasures.'
    },
    'DSC06109': {
        id: 'DSC06109',
        src: 'pics/japan trip/japan trip watermark/DSC06109.JPG',
        alt: 'Peaceful Japanese temple grounds with traditional architecture',
        title: 'Temple Serenity',
        description: 'Tranquil temple grounds offer a peaceful refuge from urban chaos, where ancient wooden structures and carefully tended gardens create an atmosphere of spiritual contemplation and timeless serenity.'
    },
    'DSC06115': {
        id: 'DSC06115',
        src: 'pics/japan trip/japan trip watermark/DSC06115.JPG',
        alt: 'Majestic Osaka Castle with traditional Japanese architecture',
        title: 'Osaka Castle',
        description: 'The magnificent Osaka Castle stands proudly against the sky, its traditional architecture and golden accents representing the power and artistry of feudal Japan. This reconstructed masterpiece continues to inspire awe in all who visit.'
    },
    'DSC06153': {
        id: 'DSC06153',
        src: 'pics/japan trip/japan trip watermark/DSC06153.JPG',
        alt: 'Modern Umeda Sky Building with futuristic architecture',
        title: 'Up To Umeda Sky Building',
        description: 'The futuristic Umeda Sky Building reaches toward the heavens with its innovative design, representing Osaka\'s architectural ambition and modern engineering prowess. This iconic structure offers breathtaking views of the sprawling metropolis below.'
    },
    'DSC06215': {
        id: 'DSC06215',
        src: 'pics/japan trip/japan trip watermark/DSC06215.JPG',
        alt: 'Spider-Man character figure or sign in Osaka entertainment district',
        title: 'Spiderman in Osaka',
        description: 'Even international superheroes find their place in Osaka\'s eclectic landscape, where global pop culture seamlessly blends with local traditions. This unexpected encounter showcases Japan\'s embrace of worldwide entertainment phenomena.'
    },
    'DSC06218': {
        id: 'DSC06218',
        src: 'pics/japan trip/japan trip watermark/DSC06218.JPG',
        alt: 'Famous Glico running man neon sign landmark in Dotonbori',
        title: 'The Glico Man Sign',
        description: 'The legendary Glico running man has been sprinting across Dotonbori\'s skyline for decades, becoming the most recognizable symbol of Osaka. This iconic neon athlete represents the city\'s energetic spirit and enduring optimism.'
    },
    'DSC06303': {
        id: 'DSC06303',
        src: 'pics/japan trip/japan trip watermark/DSC06303.JPG',
        alt: 'Traditional five-story pagoda at Kiyomizu-dera temple in Kyoto',
        title: 'Kiyomizu Dera\'s Iconic Pagoda',
        description: 'The elegant five-story pagoda of Kiyomizu-dera rises gracefully above the temple complex, its traditional wooden architecture exemplifying the refined beauty of classical Japanese design. A masterpiece of religious architecture and spiritual symbolism.'
    },
    'DSC06710': {
        id: 'DSC06710',
        src: 'pics/japan trip/japan trip watermark/DSC06710.JPG',
        alt: 'Shinjuku district at night with illuminated skyscrapers and neon',
        title: 'Nights of Shinjuku',
        description: 'Shinjuku transforms into a neon wonderland as night falls, with towering skyscrapers and countless lights creating a mesmerizing urban constellation. This district never sleeps, pulsing with the relentless energy of Tokyo\'s nightlife.'
    },
    'DSC06740': {
        id: 'DSC06740',
        src: 'pics/japan trip/japan trip watermark/DSC06740.JPG',
        alt: 'Japanese railway station at night with illuminated trains',
        title: 'Japan Night\'s Railway',
        description: 'The precision and beauty of Japan\'s railway system shine through the night, as illuminated trains glide silently through stations with clockwork efficiency. This transportation marvel connects the nation with unparalleled reliability and grace.'
    },
    'DSC06762': {
        id: 'DSC06762',
        src: 'pics/japan trip/japan trip watermark/DSC06762.JPG',
        alt: 'Kaminarimon Thunder Gate with giant red lantern at Sensoji Temple',
        title: 'Iconic Kaminarimon',
        description: 'The massive red lantern of Kaminarimon (Thunder Gate) welcomes millions of visitors to Sensoji Temple, its bold presence marking the entrance to Tokyo\'s oldest Buddhist temple. This iconic gateway has stood as a symbol of Asakusa for centuries.'
    },
    'DSC06769': {
        id: 'DSC06769',
        src: 'pics/japan trip/japan trip watermark/DSC06769.JPG',
        alt: 'Traditional Nakamise-dori shopping street leading to Sensoji Temple',
        title: 'Nakamise-dori Shopping Street',
        description: 'The historic Nakamise-dori shopping street bustles with traditional vendors and pilgrims, creating a living bridge between the sacred and commercial. This 250-meter pathway has served temple visitors for centuries, offering traditional crafts and local delicacies.'
    },
    'DSC06778': {
        id: 'DSC06778',
        src: 'pics/japan trip/japan trip watermark/DSC06778.JPG',
        alt: 'Main entrance gate to Sensoji Temple with traditional architecture',
        title: 'Entrance of Sensoji Temple',
        description: 'The grand entrance to Sensoji Temple stands as a testament to Tokyo\'s spiritual heritage, where ancient traditions continue to thrive in the modern metropolis. This sacred threshold has welcomed worshippers and visitors for over 1,400 years.'
    },
    'DSC06791': {
        id: 'DSC06791',
        src: 'pics/japan trip/japan trip watermark/DSC06791.JPG',
        alt: 'Buddhist statue of Kannon goddess at Sensoji Temple grounds',
        title: 'Statue of Kannon',
        description: 'The serene statue of Kannon, the Buddhist goddess of mercy, watches over temple visitors with compassionate eyes. This sacred figure embodies the spiritual heart of Sensoji Temple and represents the enduring power of Buddhist compassion.'
    },
    'DSC06792-2': {
        id: 'DSC06792-2',
        src: 'pics/japan trip/japan trip watermark/DSC06792-2.JPG',
        alt: 'Five-story pagoda at Sensoji Temple complex in Asakusa',
        title: 'Sensoji\'s Pagoda',
        description: 'The magnificent five-story pagoda of Sensoji Temple reaches skyward, its traditional architecture creating a striking contrast against Tokyo\'s modern skyline. This sacred tower has been rebuilt multiple times, each iteration preserving its spiritual significance.'
    },
    'DSC06812': {
        id: 'DSC06812',
        src: 'pics/japan trip/japan trip watermark/DSC06812.JPG',
        alt: 'Busy Asakusa shopping street with traditional stores and crowds',
        title: 'Asakusa Shopping Street',
        description: 'The vibrant shopping streets of Asakusa overflow with traditional goods, street food, and cultural treasures. This historic district maintains its old-world charm while serving modern visitors seeking authentic Japanese experiences and souvenirs.'
    },
    'DSC06822': {
        id: 'DSC06822',
        src: 'pics/japan trip/japan trip watermark/DSC06822.JPG',
        alt: 'Path or journey toward Tokyo Skytree tower in distance',
        title: 'Journey to Skytree',
        description: 'The journey toward Tokyo Skytree builds anticipation as Japan\'s tallest structure grows larger on the horizon. This modern broadcasting tower represents Tokyo\'s technological advancement and serves as a beacon visible throughout the sprawling metropolis.'
    },
    'DSC06886': {
        id: 'DSC06886',
        src: 'pics/japan trip/japan trip watermark/DSC06886.JPG',
        alt: 'Asakusa district at night with illuminated buildings and stars',
        title: 'Asakusa\'s Starry Night',
        description: 'Asakusa transforms under the starry night sky, its traditional buildings softly illuminated against the darkness. This magical evening atmosphere captures the timeless beauty of old Tokyo, where history and tranquility coexist in perfect harmony.'
    },
    'DSC06330': {
        id: 'DSC06330',
        src: 'pics/japan trip/japan trip watermark/DSC06330.JPG',
        alt: 'Impressive Japanese architectural structure with modern design elements',
        title: 'Architectural Wonder',
        description: 'This architectural marvel showcases Japan\'s innovative approach to design, where traditional principles merge with contemporary vision. The structure stands as a testament to Japanese engineering excellence and aesthetic sophistication.'
    },
    'DSC06318': {
        id: 'DSC06318',
        src: 'pics/japan trip/japan trip watermark/DSC06318.JPG',
        alt: 'Cultural scene at Kiyomizu-dera temple with visitors and traditions',
        title: 'Cultural Moments',
        description: 'Authentic cultural moments unfold at Kiyomizu-dera temple, where visitors participate in age-old traditions and rituals. These precious interactions between people and sacred space demonstrate the living nature of Japanese cultural heritage.'
    }
};

// Global variables
let currentSection = 'home';
let isMenuOpen = false;
let lightboxImage = null;
let lightboxIndex = 0;
let allImages = Object.values(japanImages);

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
    const imageUrls = Object.values(japanImages).map(img => img.src);

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
        const sections = document.querySelectorAll('section[class*="japan"]');
        let currentId = 'japan-hero';

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
    const image = japanImages[imageId];
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
    const images = document.querySelectorAll('.japan-grid-item img');

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

