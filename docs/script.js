document.addEventListener("DOMContentLoaded", function() {
    const drinksList = [
        { name: "Espresso", price: "$2.99" },
        { name: "Latte", price: "$3.99" },
        { name: "Cappuccino", price: "$3.49" }
    ];
    
    const snacksList = [
        { name: "Croissant", price: "$2.49" },
        { name: "Muffin", price: "$2.99" },
        { name: "Bagel with Cream Cheese", price: "$3.49" }
    ];

    const drinksHeader = document.getElementById("drinks-header");
    const snacksHeader = document.getElementById("snacks-header");
    const drinksListElement = document.getElementById("drinks-list");
    const snacksListElement = document.getElementById("snacks-list");

    drinksHeader.addEventListener("click", function() {
        toggleList(drinksListElement, drinksList, "Drinks");
    });

    snacksHeader.addEventListener("click", function() {
        toggleList(snacksListElement, snacksList, "Snacks");
    });

    function toggleList(element, items, title) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
            element.innerHTML = items.map(item => `<li>${item.name} - ${item.price}</li>`).join("");
        } else {
            element.classList.add("hidden");
            element.innerHTML = "";
        }
    }
});