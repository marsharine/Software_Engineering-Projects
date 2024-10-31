document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("text-input").value.trim();
    const result = document.getElementById("result");

    if (!input) {
        alert("Please input a value");
        return;
    }

    // Normalize the input by removing non-alphanumeric characters and converting to lowercase
    const normalizedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const isPalindrome = normalizedInput === normalizedInput.split("").reverse().join("");

    // Display the result based on whether it is a palindrome
    result.textContent = isPalindrome ? `${input} is a palindrome` : `${input} is not a palindrome`;
});

// Clear button functionality
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("text-input").value = "";
    document.getElementById("result").textContent = "";
});