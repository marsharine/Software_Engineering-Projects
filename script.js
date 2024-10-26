// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Array of quotes from Ada Lovelace
    const quotes = [
        "The more I study, the more insatiable do I feel my genius for it to be.",
        "That brain of mine is more than merely mortal; as time will show.",
        "I am in a charming state of confusion.",
        "The science of operations, as derived from mathematics more especially, is a science of itself...",
        "Imagination is the discovering faculty, pre-eminently."
    ];

    // Index to track the current quote
    let quoteIndex = 0;

    // Get the quote element by ID
    const quoteElement = document.getElementById("quote");

    if (!quoteElement) {
        console.error("Quote element not found!");
        return;
    }

    // Function to handle fading
    function fadeQuoteOut(callback) {
        quoteElement.style.opacity = 0; // Fade out
        setTimeout(callback, 500); // Match with CSS transition duration
    }

    function fadeQuoteIn() {
        quoteElement.style.opacity = 1; // Fade in
    }

    // Function to display the next quote
    function showNextQuote() {
        if (quotes.length === 0) return; // Check if there are quotes
        fadeQuoteOut(() => {
            quoteElement.textContent = quotes[quoteIndex];
            quoteIndex = (quoteIndex + 1) % quotes.length; // Loop through quotes
            fadeQuoteIn();
        });
    }

    // Quote interval management
    let quoteInterval;
    const quoteDisplayDuration = 5000; // Interval duration

    function startQuoteInterval() {
        quoteInterval = setInterval(showNextQuote, quoteDisplayDuration);
    }

    function stopQuoteInterval() {
        clearInterval(quoteInterval);
    }

    // Event listeners for interactivity
    quoteElement.addEventListener("mouseenter", stopQuoteInterval);
    quoteElement.addEventListener("mouseleave", startQuoteInterval);
    quoteElement.addEventListener("click", showNextQuote); // Click to show next quote
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") showNextQuote(); // Right arrow to show next quote
    });

    // Display the first quote immediately
    showNextQuote();
    startQuoteInterval();
});