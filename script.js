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
    };
    
    

    let score = 0;
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    const formData = new FormData(form);

    // Clear previous styles
    document.querySelectorAll(".options label").forEach(label => {
        label.classList.remove("correct", "incorrect");
    });

    for (let question in answers) {
        const questionDiv = document.getElementById(question);
        const selected = formData.get(question);
        const correctAnswer = answers[question];

        if (selected === correctAnswer) {
            score++;
            questionDiv.querySelector(
                `input[value="${correctAnswer}"]`
            ).parentNode.classList.add("correct");
        } else {
            if (selected) {
                questionDiv.querySelector(
                    `input[value="${selected}"]`
                ).parentNode.classList.add("incorrect");
            }
            questionDiv.querySelector(
                `input[value="${correctAnswer}"]`
            ).parentNode.classList.add("correct");
        }
    }

    resultDiv.innerHTML = `You scored ${score} out of ${Object.keys(answers).length}`;
    resultDiv.style.display = "block";
}
