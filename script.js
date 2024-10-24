javascript
Copy code
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
Form Validation: Add basic form validation using JavaScript before submission.
javascript
Copy code
document.querySelector("#form").addEventListener("submit", function(event) {
    // Basic validation logic here
});

<script>
  AOS.init({
    offset: 120, // Offset in pixels to start the animation
    duration: 800, // Animation duration in milliseconds
    once: true, // Whether the animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them
  });
</script>