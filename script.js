document.getElementById("submit-btn").addEventListener("click", checkAnswers);

function checkAnswers() {
  const answers = {
    q1: "c",
    q2: "d",
    q3: "b",
    q4: "a",
    q5: "c",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "a",
    q10: "b",
    q11: "b",
    q12: "a",
    q13: "b",
    q14: "d",
    q15: "a",
    q16: "a",
    q17: "b",
    q18: "a",
    q19: "b",
    q20: "c",
    q21: "a",
    q22: "b",
    q23: "b",
    q24: "a",
    q25: "a",
    q26: "a",
    q27: "b",
    q28: "c",
    q29: "b",
    q30: "c",
    q31: "b",
    q32: "a",
    q33: "c",
    q34: "c",
    q35: "a",
    q36: "d",
    q37: "b",
    q38: "b",
    q39: "b",
    q40: "b",
    q41: "a",
    q42: "c",
    q43: "b",
    q44: "b",
    q45: "a",
    q46: "b",
    q47: "b",
    q48: "a",
    q49: "a",
    q50: "a",
    q51: "c",
    q52: "b",
    q53: "b",
    q54: "a",
    q55: "b",
    q56: "c",
    q57: "c",
    q58: "b",
    q59: "c",
    q60: "b",
    q61: "c",
    q62: "b",
    q63: "a",
    q64: "a",
    q65: "b",
    q66: "c",
    q67: "b",
    q68: "a",
    q69: "b",
    q70: "b",
    q71: "b",
    q72: "b",
    q73: "a",
    q74: "b",
    q75: "a",
    q76: "a",
    q77: "c",
    q78: "b",
    q79: "b",
  };

  let score = 0;
  const form = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  const formData = new FormData(form);

  // Clear previous styles
  document.querySelectorAll(".options label").forEach((label) => {
    label.classList.remove("correct", "incorrect");
  });

  for (let question in answers) {
    const questionDiv = document.getElementById(question);
    const selected = formData.get(question);
    const correctAnswer = answers[question];

    if (selected === correctAnswer) {
      score++;
      questionDiv
        .querySelector(`input[value="${correctAnswer}"]`)
        .parentNode.classList.add("correct");
    } else {
      if (selected) {
        questionDiv
          .querySelector(`input[value="${selected}"]`)
          .parentNode.classList.add("incorrect");
      }
      questionDiv
        .querySelector(`input[value="${correctAnswer}"]`)
        .parentNode.classList.add("correct");
    }
  }

  resultDiv.innerHTML = `You scored ${score} out of ${
    Object.keys(answers).length
  }`;
  resultDiv.style.display = "block";
}
