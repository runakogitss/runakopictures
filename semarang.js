/**
 * SEMARANG HERITAGE GALLERY
 * ========================
 * 
 * Interactive photo gallery showcasing the colonial architecture and cultural heritage
 * of Semarang's historic Kota Lama district. Features a responsive masonry layout,
 * lightbox viewer with smooth transitions, and mobile-optimized touch controls.
 * 
 * Key Features:
 * - Responsive masonry grid layout
 * - Lightbox with keyboard and touch navigation
 * - Smooth animations and transitions
 * - Mobile swipe support
 * - Image preloading for performance
 * - Accessibility-friendly controls
 * 
 * @author Runako Pictures
 * @version 2.0
 */

// ============================================================================
// IMAGE DATA CONFIGURATION
// ============================================================================

/**
 * Complete image dataset for Semarang Heritage Gallery
 * Each entry contains metadata for display and lightbox functionality
 */
const semarangImages = {
    // Main Heritage Buildings
    '01': {
        id: '01',
        src: 'pics/kota lama/kotlam/01.jpg',
        alt: 'Marba Building Colonial Architecture',
        title: 'Marba Building Heritage',
        description: 'The iconic Marba Building stands as a testament to Dutch colonial grandeur, featuring classical European architecture adapted for tropical Indonesia. Its imposing facade and ornate details reflect the sophisticated urban planning of colonial Semarang.'
    },
    '02': {
        id: '02',
        src: 'pics/kota lama/kotlam/02.jpg',
        alt: 'Hotel Kotta Heritage Building',
        title: 'Hotel Kotta Colonial Elegance',
        description: 'Hotel Kotta exemplifies the fusion of Dutch colonial architecture with Indonesian hospitality. This beautifully preserved building showcases the elegant proportions and decorative elements that defined Semarang\'s golden age of trade.'
    },
    '03': {
        id: '03',
        src: 'pics/kota lama/kotlam/03.jpg',
        alt: 'Little Netherlands District',
        title: 'Little Netherlands Quarter',
        description: 'The heart of Kota Lama, often called "Little Netherlands," where cobblestone streets and colonial buildings create an authentic European atmosphere in the heart of Java. This district preserves the urban fabric of 19th-century Semarang.'
    },
    '04': {
        id: '04',
        src: 'pics/kota lama/kotlam/04.jpg',
        alt: 'Vintage Architectural Details',
        title: 'Colonial Craftsmanship',
        description: 'Intricate architectural details showcase the masterful craftsmanship of colonial builders. Every ornament, molding, and decorative element tells the story of cultural exchange between Dutch aesthetics and Javanese artistry.'
    },
    '05': {
        id: '05',
        src: 'pics/kota lama/kotlam/05.jpg',
        alt: 'Heritage Landmark Beauty',
        title: 'Timeless Heritage Landmark',
        description: 'A stunning example of colonial architecture that has weathered decades while maintaining its original grandeur. This landmark building represents the enduring beauty of Semarang\'s architectural heritage.'
    },

    // Architectural Masterpieces Series
    '05-2': {
        id: '05-2',
        src: 'pics/kota lama/kotlam/05-2.jpg',
        alt: 'Colonial Legacy Architecture',
        title: 'Colonial Architectural Legacy',
        description: 'Magnificent colonial structures that demonstrate the sophisticated urban planning vision of Dutch architects. These buildings served as administrative centers and commercial hubs during Semarang\'s colonial heyday.'
    },
    '05-3': {
        id: '05-3',
        src: 'pics/kota lama/kotlam/05-3.jpg',
        alt: 'Heritage Preservation Efforts',
        title: 'Preservation Success Story',
        description: 'Careful restoration work has brought new life to these historic structures. Modern conservation techniques ensure that future generations can appreciate the architectural and cultural significance of Kota Lama.'
    },
    '05-4': {
        id: '05-4',
        src: 'pics/kota lama/kotlam/05-4.jpg',
        alt: 'Dutch-Javanese Architectural Fusion',
        title: 'East Meets West Architecture',
        description: 'The elegant fusion of Dutch colonial design with Javanese building traditions created a unique architectural language. This synthesis reflects the complex cultural interactions of colonial Indonesia.'
    },
    '05-5': {
        id: '05-5',
        src: 'pics/kota lama/kotlam/05-5.jpg',
        alt: 'Historic Monument Tower',
        title: 'Towering Heritage Monument',
        description: 'This imposing structure has served as a landmark for generations of traders and travelers. Its distinctive silhouette defines Semarang\'s skyline and embodies the city\'s role as a gateway to Java.'
    },
    '05-6': {
        id: '05-6',
        src: 'pics/kota lama/kotlam/05-6.jpg',
        alt: 'Living Cultural Heritage',
        title: 'Living Heritage District',
        description: 'Where history comes alive in daily life. These colonial buildings now house modern businesses and cultural activities, demonstrating how heritage architecture continues to serve contemporary needs.'
    },

    // Street Life and Details
    '05-7': {
        id: '05-7',
        src: 'pics/kota lama/kotlam/05-7.jpg',
        alt: 'Antique Motorcycle Heritage',
        title: 'Vintage Motorcycle Charm',
        description: 'A classic motorcycle adds character to the historic streetscape. These vintage details complement the colonial architecture, creating authentic period atmosphere in modern Kota Lama.'
    },
    '05-8': {
        id: '05-8',
        src: 'pics/kota lama/kotlam/05-8.jpg',
        alt: 'Architectural Splendor Heritage',
        title: 'Architectural Splendor',
        description: 'The magnificent facade showcases the technical mastery and artistic vision of colonial architects. Every element, from proportions to decorative details, reflects sophisticated design principles.'
    },
    '05-9': {
        id: '05-9',
        src: 'pics/kota lama/kotlam/05-9.jpg',
        alt: 'Heritage Walking Experience',
        title: 'Heritage Discovery Walk',
        description: 'Strolling through Kota Lama reveals layers of history at every turn. Each building, street corner, and architectural detail contributes to the rich tapestry of Semarang\'s cultural heritage.'
    },
    '05-10': {
        id: '05-10',
        src: 'pics/kota lama/kotlam/05-10.jpg',
        alt: 'Colonial Elegance Details',
        title: 'Refined Colonial Elegance',
        description: 'Sophisticated architectural details demonstrate the refined aesthetic sensibilities of the colonial period. These elements showcase the adaptation of European styles to Indonesian climate and culture.'
    },

    // Preservation and Modern Integration
    '05-11': {
        id: '05-11',
        src: 'pics/kota lama/kotlam/05-11.jpg',
        alt: 'Historic Preservation Success',
        title: 'Conservation Excellence',
        description: 'Exemplary preservation work maintains the integrity of original architecture while adapting buildings for modern use. This careful balance ensures heritage sustainability for future generations.'
    },
    '05-12': {
        id: '05-12',
        src: 'pics/kota lama/kotlam/05-12.jpg',
        alt: 'Cultural Fusion Architecture',
        title: 'Harmonious Cultural Blend',
        description: 'The seamless integration of Dutch and Indonesian architectural elements creates a unique visual language. This cultural synthesis represents the complex negotiations of colonial-era Indonesia.'
    },
    '05-13': {
        id: '05-13',
        src: 'pics/kota lama/kotlam/05-13.jpg',
        alt: 'Butterflies in Heritage Garden',
        title: 'Nature\'s Heritage Visitors',
        description: 'Butterflies dancing among the heritage buildings add life and color to the historic district. These unexpected natural moments remind us that Kota Lama is a living, breathing cultural landscape.'
    },
    '05-14': {
        id: '05-14',
        src: 'pics/kota lama/kotlam/05-14.jpg',
        alt: 'Intricate Architectural Details',
        title: 'Masterful Detail Work',
        description: 'Every corner reveals exquisite craftsmanship and attention to detail. These architectural elements showcase the skill and artistry of the builders who created these enduring monuments.'
    },
    '05-15': {
        id: '05-15',
        src: 'pics/kota lama/kotlam/05-15.jpg',
        alt: 'Timeless Colonial Beauty',
        title: 'Enduring Colonial Beauty',
        description: 'Classical European proportions adapted for tropical conditions create timeless architectural beauty. These buildings continue to captivate visitors with their elegant design and historical significance.'
    },

    // Gardens and Natural Elements
    '05-16': {
        id: '05-16',
        src: 'pics/kota lama/kotlam/05-16.jpg',
        alt: 'Heritage Garden Flowers',
        title: 'Blooming Heritage Gardens',
        description: 'Colorful flowers bloom against the backdrop of colonial architecture, creating a perfect harmony between nature and built heritage. These gardens add warmth and life to the historic district.'
    },
    '05-17': {
        id: '05-17',
        src: 'pics/kota lama/kotlam/05-17.jpg',
        alt: 'Golden Age Architecture',
        title: 'Golden Age Grandeur',
        description: 'Preserved architecture from Semarang\'s golden age when the city was a crucial link in global trade networks. These buildings represent the height of colonial architectural achievement in Indonesia.'
    },
    '05-18': {
        id: '05-18',
        src: 'pics/kota lama/kotlam/05-18.jpg',
        alt: 'Historic Kota Lama Streets',
        title: 'Historic Street Character',
        description: 'The streets of Kota Lama serve as outdoor museums, where every building facade tells stories of cultural exchange, trade, and the social transformations of colonial Indonesia.'
    },
    '05-19': {
        id: '05-19',
        src: 'pics/kota lama/kotlam/05-19.jpg',
        alt: 'Bank Mandiri Heritage Building',
        title: 'Mandiri Heritage Banking',
        description: 'When modern Indonesian banking meets colonial heritage architecture. Bank Mandiri\'s presence in this historic building demonstrates how heritage structures continue to serve contemporary commercial needs.'
    },
    '05-20': {
        id: '05-20',
        src: 'pics/kota lama/kotlam/05-20.jpg',
        alt: 'Blooming Heritage Flowers',
        title: 'Heritage Garden Blooms',
        description: 'Vibrant flowers add natural beauty to the historic streetscape. These carefully maintained gardens enhance the visual appeal of the heritage district while respecting its historical character.'
    },

    // Modern Heritage Integration
    '05-21': {
        id: '05-21',
        src: 'pics/kota lama/kotlam/05-21.jpg',
        alt: 'Starbucks Heritage Cafe',
        title: 'Coffee Culture Meets Heritage',
        description: 'Starbucks\' presence in a beautifully restored colonial building shows how international brands can respectfully integrate with heritage architecture, creating unique cultural experiences.'
    },
    '05-22': {
        id: '05-22',
        src: 'pics/kota lama/kotlam/05-22.jpg',
        alt: 'Colonial Architectural Beauty',
        title: 'Timeless Architectural Grace',
        description: 'Elegant colonial structures that represent the sophisticated urban planning and architectural vision of the Dutch colonial period. These buildings continue to define Semarang\'s cultural identity.'
    },
    '05-23': {
        id: '05-23',
        src: 'pics/kota lama/kotlam/05-23.jpg',
        alt: 'Heritage District Atmosphere',
        title: 'Living Heritage Atmosphere',
        description: 'The cultural heart of old Semarang, where colonial urban planning creates a distinctive sense of place. This atmosphere connects visitors to the rich history of Indonesian-Dutch cultural exchange.'
    },
    '05-24': {
        id: '05-24',
        src: 'pics/kota lama/kotlam/05-24.jpg',
        alt: 'Dutch Colonial Design Excellence',
        title: 'Colonial Design Mastery',
        description: 'Outstanding examples of Dutch colonial architecture that demonstrate the principles and aesthetic values that shaped Indonesia\'s built environment during the colonial period.'
    },
    '05-25': {
        id: '05-25',
        src: 'pics/kota lama/kotlam/05-25.jpg',
        alt: 'Heritage Conservation Success',
        title: 'Heritage for Future Generations',
        description: 'Successful conservation efforts ensure that architectural heritage continues to enrich contemporary Indonesian culture. These preservation initiatives maintain historical authenticity while enabling modern use.'
    },

    // Cultural Integration and Signage
    '05-26': {
        id: '05-26',
        src: 'pics/kota lama/kotlam/05-26.jpg',
        alt: 'Kota Lama Direction Signs',
        title: 'Heritage Navigation',
        description: 'Clear directional signage helps visitors navigate the historic district while maintaining the area\'s authentic character. These thoughtful additions enhance the heritage experience without compromising historical integrity.'
    },
    '05-27': {
        id: '05-27',
        src: 'pics/kota lama/kotlam/05-27.jpg',
        alt: 'London-style Architecture Indonesia',
        title: 'European Architectural Echoes',
        description: 'Architectural elements that evoke European cities like London, demonstrating how colonial architects brought familiar design languages to Indonesian settings while adapting to local conditions.'
    },
    '05-28': {
        id: '05-28',
        src: 'pics/kota lama/kotlam/05-28.jpg',
        alt: 'Heritage Coffee Shop Signs',
        title: 'Heritage Coffee Culture',
        description: 'Local coffee culture thrives in the heritage district, with traditional coffee shops creating authentic Indonesian experiences within the colonial architectural setting.'
    },
    '05-29': {
        id: '05-29',
        src: 'pics/kota lama/kotlam/05-29.jpg',
        alt: 'Marabunta Morning Architecture',
        title: 'Morning Light on Heritage',
        description: 'The Marabunta building bathed in morning light reveals the subtle beauty of colonial architecture. The interplay of light and shadow enhances the building\'s architectural details and historical character.'
    },
    '05-30': {
        id: '05-30',
        src: 'pics/kota lama/kotlam/05-30.jpg',
        alt: 'Japanese-Indonesian Heritage Fusion',
        title: 'Cultural Architecture Fusion',
        description: 'Where Japanese architectural influences meet Semarang heritage, creating unique cultural intersections. This blend reflects the diverse cultural influences that have shaped modern Indonesia.'
    },

    // Culinary Heritage Integration
    '05-31': {
        id: '05-31',
        src: 'pics/kota lama/kotlam/05-31.jpg',
        alt: 'Ramen Shop Heritage Building',
        title: 'Ramen Meets Heritage',
        description: 'A Japanese ramen shop housed in a colonial building represents the multicultural character of modern Semarang. This fusion of culinary traditions and architectural heritage creates unique cultural experiences.'
    },
    '05-32': {
        id: '05-32',
        src: 'pics/kota lama/kotlam/05-32.jpg',
        alt: 'Magnificent Heritage Architecture',
        title: 'Architectural Monument',
        description: 'Magnificent structures that stand as monuments to Semarang\'s rich heritage. These buildings represent the pinnacle of colonial architectural achievement and continue to inspire contemporary appreciation for historical preservation.'
    }
};

// ============================================================================
// APPLICATION STATE MANAGEMENT
// ============================================================================

/**
 * Global application state variables
 */
const AppState = {
    currentSection: 'home',
    isMenuOpen: false,
    lightboxImage: null,
    lightboxIndex: 0,
    allImages: Object.values(semarangImages),
    isInitialized: false
};

// ============================================================================
// CORE APPLICATION INITIALIZATION
// ============================================================================

/**
 * Main application initialization
 * Sets up all components and event listeners when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeApplication();
});

/**
 * Initialize all application components
 */
function initializeApplication() {
    try {
        // Initialize external libraries
        initializeLucideIcons();
        
        // Set up core functionality
        setupScrollListener();
        setupKeyboardListeners();
        setupClickOutsideListener();
        setupSmoothScrolling();
        
        // Initialize gallery features
        preloadImages();
        initializeImageLoading();
        ensureGalleryVisibility();
        
        // Initialize mobile features
        setupTouchControls();
        
        // Final setup
        document.body.style.opacity = '1';
        AppState.isInitialized = true;
        
        console.log('Semarang Heritage Gallery initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

/**
 * Initialize Lucide icons if available
 */
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ============================================================================
// IMAGE LOADING AND PRELOADING
// ============================================================================

/**
 * Preload all gallery images for better performance
 */
function preloadImages() {
    const imageUrls = AppState.allImages.map(img => img.src);
    let loadedCount = 0;
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            if (loadedCount === imageUrls.length) {
                console.log(`Successfully preloaded ${loadedCount} images`);
            }
        };
        img.onerror = () => {
            console.warn(`Failed to preload: ${url}`);
        };
        img.src = url;
    });
}

/**
 * Initialize smooth image loading with error handling
 */
function initializeImageLoading() {
    const images = document.querySelectorAll('.semarang-grid-item img');
    
    images.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            img.addEventListener('error', function() {
                console.warn(`Failed to load image: ${this.src}`);
                this.classList.add('loaded'); // Still show container
            });
        }
    });
    
    // Fallback: Force show images after timeout
    setTimeout(() => {
        images.forEach(img => {
            if (!img.classList.contains('loaded')) {
                img.classList.add('loaded');
            }
        });
    }, 3000);
}

/**
 * Ensure gallery items are visible with multiple fallback mechanisms
 */
function ensureGalleryVisibility() {
    // Immediate visibility check
    setTimeout(() => {
        const gridItems = document.querySelectorAll('.semarang-grid-item');
        gridItems.forEach((item, index) => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('force-visible');
        });
    }, 100);
    
    // Secondary fallback
    setTimeout(() => {
        const gridItems = document.querySelectorAll('.semarang-grid-item');
        gridItems.forEach(item => {
            if (getComputedStyle(item).opacity === '0') {
                item.classList.add('force-visible');
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }, 2000);
}

// ============================================================================
// NAVIGATION FUNCTIONALITY
// ============================================================================

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    setIsMenuOpen(!AppState.isMenuOpen);
}

/**
 * Set mobile menu open/closed state
 * @param {boolean} open - Whether menu should be open
 */
function setIsMenuOpen(open) {
    AppState.isMenuOpen = open;
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (AppState.isMenuOpen) {
        mobileNav?.classList.remove('hidden');
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
    } else {
        mobileNav?.classList.add('hidden');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
    }
}

/**
 * Set up scroll listener for navigation highlighting
 */
function setupScrollListener() {
    const handleScroll = () => {
        const sections = document.querySelectorAll('section[class*="semarang"]');
        let currentId = 'semarang-hero';
        
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

/**
 * Update current section state
 * @param {string} sectionId - ID of current section
 */
function setCurrentSection(sectionId) {
    if (AppState.currentSection === sectionId) return;
    AppState.currentSection = sectionId;
}

// ============================================================================
// LIGHTBOX FUNCTIONALITY
// ============================================================================

/**
 * Open lightbox with specified image
 * @param {string} imageId - ID of image to display
 */
function openLightbox(imageId) {
    const image = semarangImages[imageId];
    if (!image) {
        console.warn(`Image with ID '${imageId}' not found`);
        return;
    }
    
    const index = AppState.allImages.findIndex(img => img.id === imageId);
    AppState.lightboxImage = image;
    AppState.lightboxIndex = index;
    
    updateLightboxContent(true);
    showLightbox();
}

/**
 * Close lightbox and reset state
 */
function closeLightbox() {
    hideLightbox();
    AppState.lightboxImage = null;
}

/**
 * Navigate to next/previous image in lightbox
 * @param {string} direction - 'next' or 'prev'
 */
function navigateLightbox(direction) {
    if (AppState.allImages.length === 0) return;
    
    const newIndex = direction === 'next'
        ? (AppState.lightboxIndex + 1) % AppState.allImages.length
        : (AppState.lightboxIndex - 1 + AppState.allImages.length) % AppState.allImages.length;
    
    slideToImage(newIndex, direction);
}

/**
 * Update lightbox content with current image data
 * @param {boolean} skipTransition - Whether to skip animation
 */
function updateLightboxContent(skipTransition = false) {
    if (!AppState.lightboxImage) return;
    
    const elements = {
        image: document.getElementById('lightbox-image'),
        title: document.getElementById('lightbox-title'),
        description: document.getElementById('lightbox-description'),
        counter: document.getElementById('lightbox-counter')
    };
    
    if (skipTransition && elements.image) {
        elements.image.src = AppState.lightboxImage.src;
        elements.image.alt = AppState.lightboxImage.alt;
        elements.title.textContent = AppState.lightboxImage.title;
        elements.description.textContent = AppState.lightboxImage.description;
    }
    
    // Update counter and navigation
    if (AppState.allImages.length > 1) {
        elements.counter.textContent = `${AppState.lightboxIndex + 1} of ${AppState.allImages.length}`;
        elements.counter.style.display = 'block';
        toggleNavigationButtons(true);
    } else {
        elements.counter.style.display = 'none';
        toggleNavigationButtons(false);
    }
}

/**
 * Show/hide navigation buttons
 * @param {boolean} show - Whether to show buttons
 */
function toggleNavigationButtons(show) {
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const display = show ? 'block' : 'none';
    
    if (prevBtn) prevBtn.style.display = display;
    if (nextBtn) nextBtn.style.display = display;
}

/**
 * Animate transition to new image
 * @param {number} newIndex - Index of new image
 * @param {string} direction - Direction of transition
 */
function slideToImage(newIndex, direction) {
    const lightboxImageEl = document.getElementById('lightbox-image');
    const lightboxInfo = document.querySelector('.lightbox-info');
    
    // Prevent multiple transitions
    if (lightboxImageEl?.classList.contains('slide-out-left') ||
        lightboxImageEl?.classList.contains('slide-out-right')) {
        return;
    }
    
    const slideOutClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
    const slideInClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';
    
    // Start transition
    lightboxInfo?.classList.add('fade-out');
    lightboxImageEl?.classList.add(slideOutClass);
    
    setTimeout(() => {
        // Update state
        AppState.lightboxIndex = newIndex;
        AppState.lightboxImage = AppState.allImages[newIndex];
        
        // Update content
        updateImageContent();
        
        // Animate in
        lightboxImageEl?.classList.remove(slideOutClass);
        lightboxImageEl?.classList.add(slideInClass);
        
        // Force reflow
        lightboxImageEl?.offsetHeight;
        
        // Complete transition
        lightboxImageEl?.classList.remove(slideInClass);
        lightboxImageEl?.classList.add('slide-active');
        lightboxInfo?.classList.remove('fade-out');
        lightboxInfo?.classList.add('fade-in');
        
        // Cleanup
        setTimeout(() => {
            lightboxImageEl?.classList.remove('slide-active');
            lightboxInfo?.classList.remove('fade-in');
        }, 400);
        
    }, 200);
}

/**
 * Update image content during transition
 */
function updateImageContent() {
    const elements = {
        image: document.getElementById('lightbox-image'),
        title: document.getElementById('lightbox-title'),
        description: document.getElementById('lightbox-description'),
        counter: document.getElementById('lightbox-counter')
    };
    
    if (elements.image) elements.image.src = AppState.lightboxImage.src;
    if (elements.image) elements.image.alt = AppState.lightboxImage.alt;
    if (elements.title) elements.title.textContent = AppState.lightboxImage.title;
    if (elements.description) elements.description.textContent = AppState.lightboxImage.description;
    if (elements.counter) elements.counter.textContent = `${AppState.lightboxIndex + 1} of ${AppState.allImages.length}`;
}

/**
 * Show lightbox with mobile optimizations
 */
function showLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Mobile features
    if (isMobileDevice()) {
        const indicator = document.querySelector('.mobile-swipe-indicator');
        if (indicator) {
            indicator.style.display = 'block';
            indicator.style.opacity = '0.7';
        }
        hideMobileIndicator();
    }
    
    // Trigger reflow
    lightbox?.offsetHeight;
}

/**
 * Hide lightbox with transition
 */
function hideLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    setTimeout(() => {
        lightbox?.classList.add('hidden');
        document.body.style.overflow = '';
    }, 50);
}

// ============================================================================
// EVENT LISTENERS AND CONTROLS
// ============================================================================

/**
 * Set up keyboard event listeners
 */
function setupKeyboardListeners() {
    document.addEventListener('keydown', function(event) {
        if (!AppState.lightboxImage) return;
        
        // Prevent navigation during transitions
        const lightboxImageEl = document.getElementById('lightbox-image');
        if (lightboxImageEl?.classList.contains('slide-out-left') ||
            lightboxImageEl?.classList.contains('slide-out-right')) {
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

/**
 * Set up click outside lightbox to close
 */
function setupClickOutsideListener() {
    document.addEventListener('click', function(event) {
        const lightbox = document.getElementById('lightbox');
        const lightboxContent = document.querySelector('.lightbox-content');
        
        if (event.target === lightbox && lightboxContent && 
            !lightboxContent.contains(event.target)) {
            closeLightbox();
        }
    });
}

/**
 * Set up smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ============================================================================
// MOBILE TOUCH CONTROLS
// ============================================================================

/**
 * Touch control state
 */
const TouchState = {
    startX: 0,
    endX: 0,
    startY: 0,
    endY: 0,
    isSwiping: false
};

/**
 * Set up touch controls for mobile devices
 */
function setupTouchControls() {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
}

/**
 * Handle touch start event
 * @param {TouchEvent} event - Touch event
 */
function handleTouchStart(event) {
    if (!AppState.lightboxImage) return;
    
    const touch = event.changedTouches[0];
    TouchState.startX = touch.screenX;
    TouchState.startY = touch.screenY;
    TouchState.isSwiping = false;
    
    // Hide swipe indicator
    const indicator = document.querySelector('.mobile-swipe-indicator');
    if (indicator) indicator.style.display = 'none';
}

/**
 * Handle touch move event
 * @param {TouchEvent} event - Touch event
 */
function handleTouchMove(event) {
    if (!AppState.lightboxImage) return;
    
    const touch = event.changedTouches[0];
    const deltaX = Math.abs(touch.screenX - TouchState.startX);
    const deltaY = Math.abs(touch.screenY - TouchState.startY);
    
    // Determine if horizontal swipe
    if (deltaX > deltaY && deltaX > 10) {
        TouchState.isSwiping = true;
        event.preventDefault();
    }
}

/**
 * Handle touch end event
 * @param {TouchEvent} event - Touch event
 */
function handleTouchEnd(event) {
    if (!AppState.lightboxImage || !TouchState.isSwiping) return;
    
    const touch = event.changedTouches[0];
    TouchState.endX = touch.screenX;
    TouchState.endY = touch.screenY;
    handleSwipe();
}

/**
 * Process swipe gesture
 */
function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = TouchState.endX - TouchState.startX;
    const verticalDistance = Math.abs(TouchState.endY - TouchState.startY);
    
    // Only process horizontal swipes
    if (verticalDistance > 100) return;
    
    // Prevent swipe during transitions
    const lightboxImageEl = document.getElementById('lightbox-image');
    if (lightboxImageEl?.classList.contains('slide-out-left') ||
        lightboxImageEl?.classList.contains('slide-out-right')) {
        return;
    }
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            navigateLightbox('prev'); // Swipe right
        } else {
            navigateLightbox('next'); // Swipe left
        }
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
function isMobileDevice() {
    return window.innerWidth <= 768;
}

/**
 * Auto-hide mobile swipe indicator
 */
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

/**
 * Navigate to page with smooth transition
 * @param {string} url - Target URL
 */
function navigateToPage(url) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// ============================================================================
// EXPORT FOR TESTING (if needed)
// ============================================================================

// Expose key functions for testing or external access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        semarangImages,
        AppState,
        openLightbox,
        closeLightbox,
        navigateLightbox
    };
}