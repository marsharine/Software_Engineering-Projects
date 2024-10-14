function checkAnswers() {
    const quizForm = document.forms["quizForm"];
    
    let score = 0;
    
    // Correct answers
    const answers = {
      q1: "const",
      q2: "All of the above",
      q3: "if (x == 5) {}",
      q4: "myFunction()",
      q5: "document.getElementById()"
    };
    
    // Loop through the answers and check if the selected answer is correct
    for (let question in answers) {
      if (quizForm[question].value === answers[question]) {
        score++;
      }
    }
    
    // Display the result
    const result = document.getElementById("result");
    result.textContent = `You got ${score} out of 5 correct!`;
  }