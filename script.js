// script.js

// script.js

// Select all anchor links within the side menu
document.querySelectorAll('.side-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior
        
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href');

        // Check if the target ID is valid
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust scrolling offset to account for fixed title bar
                const offset = document.querySelector('.title-bar').offsetHeight; // Get height of title bar

                // Calculate the target position, considering the offset
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                // Smoothly scroll to the target element, considering the offset
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Target element with ID "${targetId}" not found.`);
                // Optional: Scroll to the top of the page if target not found
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            console.error(`No href attribute found for this anchor.`);
        }
    });
});