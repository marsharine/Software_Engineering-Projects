// Base values for a 55g serving
const baseNutrition = {
  calories: 230,
  totalFat: 8,
  satFat: 1,
  cholesterol: 0,
  sodium: 160,
  carbohydrate: 37,
  fiber: 4,
  sugars: 12,
  addedSugars: 10,
  protein: 3
};

// Function to update the nutritional facts
function updateNutrition() {
  const servingSizeInput = document.getElementById('servingSizeInput');
  const servingSize = parseFloat(servingSizeInput.value);

  if (isNaN(servingSize) || servingSize <= 0) {
      // Handle invalid input
      alert('Please enter a valid serving size.');
      return;
  }

  // Calculate new values based on serving size (assuming the base size is 55g)
  const baseServingSize = 55;  // Base size in grams
  const scaleFactor = servingSize / baseServingSize;

  document.getElementById('calories').textContent = Math.round(baseNutrition.calories * scaleFactor);
  document.getElementById('totalFat').textContent = Math.round(baseNutrition.totalFat * scaleFactor) + 'g';
  document.getElementById('satFat').textContent = Math.round(baseNutrition.satFat * scaleFactor) + 'g';
  document.getElementById('cholesterol').textContent = Math.round(baseNutrition.cholesterol * scaleFactor) + 'mg';
  document.getElementById('sodium').textContent = Math.round(baseNutrition.sodium * scaleFactor) + 'mg';
  document.getElementById('carbohydrate').textContent = Math.round(baseNutrition.carbohydrate * scaleFactor) + 'g';
  document.getElementById('fiber').textContent = Math.round(baseNutrition.fiber * scaleFactor) + 'g';
  document.getElementById('sugars').textContent = Math.round(baseNutrition.sugars * scaleFactor) + 'g';
  document.getElementById('addedSugars').textContent = Math.round(baseNutrition.addedSugars * scaleFactor) + 'g';
  document.getElementById('protein').textContent = Math.round(baseNutrition.protein * scaleFactor) + 'g';
}

// Attach the updateNutrition function to input change event
document.getElementById('servingSizeInput').addEventListener('input', updateNutrition);