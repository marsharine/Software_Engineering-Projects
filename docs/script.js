document.getElementById('submit').addEventListener('click', function() {
    const quizAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'b',
        q6: 'b',
        q7: 'b'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    const resultsContainer = document.getElementById('results');

    formData.forEach((value, key) => {
        if (value === quizAnswers[key]) {
            score++;
        }
    });

    resultsContainer.textContent = `You got ${score} out of 7 correct!`;
});