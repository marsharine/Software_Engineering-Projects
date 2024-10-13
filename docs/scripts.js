function updateTotals() {
    const years = ['2019', '2020', '2021'];
    
    years.forEach(year => {
        const cash = parseFloat(document.getElementById(`cash${year}`).value) || 0;
        const checking = parseFloat(document.getElementById(`checking${year}`).value) || 0;
        const savings = parseFloat(document.getElementById(`savings${year}`).value) || 0;
        
        const totalAssets = cash + checking + savings;
        document.getElementById(`totalAssets${year}`).textContent = `$${totalAssets.toFixed(2)}`;

        const loans = parseFloat(document.getElementById(`loans${year}`).value) || 0;
        const expenses = parseFloat(document.getElementById(`expenses${year}`).value) || 0;
        const credit = parseFloat(document.getElementById(`credit${year}`).value) || 0;

        const totalLiabilities = loans + expenses + credit;
        document.getElementById(`total