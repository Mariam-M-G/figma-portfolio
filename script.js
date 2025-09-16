// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.nav-mobile');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    const mobileMenu = document.querySelector('.nav-mobile');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenu.classList.remove('active');
    menuBtn.classList.remove('active');
}

// Intersection Observer for Animations
function createObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animateElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in');
    animateElements.forEach(el => observer.observe(el));
}

// Add scroll animations to elements
function addScrollAnimations() {
    // About section paragraphs
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs.forEach((p, index) => {
        p.classList.add('fade-up');
        p.style.transitionDelay = `${0.4 + index * 0.2}s`;
    });

    // Skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.classList.add('fade-left');
        item.style.transitionDelay = `${index * 0.05}s`;
    });

    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${index * 0.2}s`;
    });
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(231, 212, 187, 0.95)';
            header.style.backdropFilter = 'blur(12px)';
        } else {
            header.style.background = 'rgba(231, 212, 187, 0.9)';
            header.style.backdropFilter = 'blur(8px)';
        }

        lastScrollY = currentScrollY;
    });
}

// Animate social links with stagger
function animateSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.animationDelay = `${1.8 + index * 0.1}s`;
    });

    const footerSocialLinks = document.querySelectorAll('.footer-social-link');
    footerSocialLinks.forEach((link, index) => {
        link.style.animationDelay = `${0.6 + index * 0.1}s`;
    });
}

// Add hover effects to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-project');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
    });
}

// Add typing animation to hero title
function addTypingAnimation() {
    const titleLine1 = document.querySelector('.title-line-1');
    const titleLine2 = document.querySelector('.title-line-2');
    
    if (titleLine1 && titleLine2) {
        // Add typing cursor effect
        const cursor = document.createElement('span');
        cursor.innerHTML = '|';
        cursor.style.animation = 'blink 1s infinite';
        cursor.style.fontWeight = 'normal';
        
        // Add CSS for cursor blink
        const cursorStyle = document.createElement('style');
        cursorStyle.textContent = `
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(cursorStyle);
        
        // Add cursor after animation completes
        setTimeout(() => {
            titleLine2.appendChild(cursor);
            setTimeout(() => {
                cursor.remove();
            }, 3000);
        }, 2000);
    }
}

// Add parallax effect to hero section
function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add smooth reveal animations for project features
function animateProjectFeatures() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const features = card.querySelectorAll('.project-features li');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    features.forEach((feature, index) => {
                        setTimeout(() => {
                            feature.style.opacity = '1';
                            feature.style.transform = 'translateX(0)';
                        }, index * 50);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(card);
        
        // Initially hide features
        features.forEach(feature => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateX(-20px)';
            feature.style.transition = 'all 0.3s ease-out';
        });
    });
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item, .nav-item-mobile');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.textContent.toLowerCase() === sectionId || 
                        (sectionId === 'hero' && item.textContent.toLowerCase() === 'home')) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
}

// Add loading animation
function addLoadingAnimation() {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease-out;
    `;
    
    const loader = document.createElement('div');
    loader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 3px solid var(--border);
            border-top: 3px solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;
    
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
    
    loadingOverlay.appendChild(loader);
    document.body.appendChild(loadingOverlay);
    
    // Remove loading overlay after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1000);
    });
}

// Close mobile menu when clicking outside
function handleOutsideClick() {
    document.addEventListener('click', (e) => {
        const mobileMenu = document.querySelector('.nav-mobile');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const header = document.querySelector('.header');
        
        if (!header.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    addLoadingAnimation();
    
    // Initialize scroll animations
    addScrollAnimations();
    createObserver();
    
    // Initialize effects
    handleHeaderScroll();
    animateSocialLinks();
    addButtonEffects();
    addTypingAnimation();
    addParallaxEffect();
    animateProjectFeatures();
    updateActiveNavigation();
    handleOutsideClick();
    
    // Add custom styles for active navigation
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        .nav-item.active,
        .nav-item-mobile.active {
            color: var(--primary) !important;
        }
        
        .nav-item.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(navStyle);
});

// Add resize handler for responsive behavior
window.addEventListener('resize', () => {
    const mobileMenu = document.querySelector('.nav-mobile');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});