// Smooth Scrolling for Navbar Links
function enableSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Typewriter Effect for Subtext
function initializeTypewriter() {
    const typewriterText = [
        "Software Engineering",
        "AI",
        "Data Analysis",
        "Info Sec",
        "Technical Writing"
    ];
    let index = 0;
    const typewriterElement = document.querySelector(".typewriter-subtext");

    function type() {
        typewriterElement.textContent = typewriterText[index];
        index = (index + 1) % typewriterText.length;
        setTimeout(type, 2000);
    }
    type();
}

// Accordion Toggle
function enableAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
}

// Mobile Menu Toggle
function setupMobileMenuToggle() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (mobileMenu && navbarMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
    }
}

// Active Link Highlighting on Scroll
function setupActiveLinkHighlighting() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 70;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// CTA Button Smooth Scroll
function setupCtaButtonScroll() {
    const ctaButton = document.querySelector('.cta-btn');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(ctaButton.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Project Section - Quotes and Image Rotator
function setupQuoteRotator() {
    const quotes = [
        "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth.” - Ada Lovelace",
        "“I have a strong faith that we shall be able to see great things in the future, if we only take care to do the best we can now.” - Ada Lovelace",
        "“That brain of mine is something more than merely mortal; as time will show.” - Ada Lovelace",
    ];

    const images = [
        "https://7rgik9rvuzdcm0fg.public.blob.vercel-storage.com/lovelace%20images/Ada_Lovelace3-uzyiJwysOUdGz08CLCOb4RamFfVgpL.jpg",
        "https://7rgik9rvuzdcm0fg.public.blob.vercel-storage.com/lovelace%20images/Ada_Lovelace1-mKnDbkmpwmrdfoDvP5WDrPiVwwFCY2.jpg",
    ];

    let currentIndex = 0;

    function updateContent() {
        const quoteText = document.getElementById("quote-text");
        const image = document.getElementById("lovelace-image");

        if (quoteText && image) {
            quoteText.textContent = quotes[currentIndex];
            image.src = images[currentIndex];
            currentIndex = (currentIndex + 1) % quotes.length;
        }
    }

    setInterval(updateContent, 5000);
}

// Back-to-Top Button
function setupBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Form Validation
function setupFormValidation() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                event.preventDefault();
            }
        });
    }
}

// Initialize All Functions
function initializePortfolio() {
    enableSmoothScroll();
    initializeTypewriter();
    enableAccordion();
    setupMobileMenuToggle();
    setupActiveLinkHighlighting();
    setupCtaButtonScroll();
    setupQuoteRotator();
    setupBackToTopButton();
    setupFormValidation();
}

// Call initialize function when DOM content is loaded
// Smooth scroll for Back to Top button
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
    
