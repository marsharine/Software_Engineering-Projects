// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Active Link Highlighting
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

// Smooth Scroll for CTA Button
const ctaButton = document.querySelector('.cta-btn');

ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(ctaButton.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
});

//Project Section
const quotes = [
    "“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth.” - Ada Lovelace",
    "“I have a strong faith that we shall be able to see great things in the future, if we only take care to do the best we can now.” - Ada Lovelace",
    "“That brain of mine is something more than merely mortal; as time will show.” - Ada Lovelace",
];

const images = [
    "https://7rgik9rvuzdcm0fg.public.blob.vercel-storage.com/lovelace%20images/Ada_Lovelace3-uzyiJwysOUdGz08CLCOb4RamFfVgpL.jpg",
    "https://7rgik9rvuzdcm0fg.public.blob.vercel-storage.com/lovelace%20images/Ada_Lovelace1-mKnDbkmpwmrdfoDvP5WDrPiVwwFCY2.jpg",
    // Add more image URLs here as needed
];

let currentIndex = 0;

function updateContent() {
    const quoteText = document.getElementById("quote-text");
    const image = document.getElementById("lovelace-image");

    // Update quote and image
    quoteText.textContent = quotes[currentIndex];
    image.src = images[currentIndex];

    // Update index
    currentIndex = (currentIndex + 1) % quotes.length; // Loop back to start
}

// Change every 5 seconds
setInterval(updateContent, 5000);
