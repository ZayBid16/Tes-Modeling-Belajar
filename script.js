document.addEventListener("DOMContentLoaded", () => {
    const firstQuestion = document.querySelector(".question");
    if (firstQuestion) {
        firstQuestion.classList.remove("hidden");
    }
});

const scores = {
    visual: 0,
    auditory: 0,
    kinesthetic: 0,
};

function answer(type, isYes) {
    if (isYes) scores[type]++;
    showNextQuestion();
}

function showNextQuestion() {
    const currentQuestion = document.querySelector(".question:not(.hidden)");
    if (currentQuestion) {
        currentQuestion.classList.add("hidden");
    }

    const nextQuestion = currentQuestion?.nextElementSibling;
    if (nextQuestion && nextQuestion.classList.contains("question")) {
        nextQuestion.classList.remove("hidden");
    } else {
        showResult();
    }
}

function showResult() {
    const resultText = document.getElementById("result-text");
    const maxScore = Math.max(scores.visual, scores.auditory, scores.kinesthetic);

    let result = "";
    if (scores.visual === maxScore) {
        result = "Kamu cenderung ke gaya belajar Visual.";
    } else if (scores.auditory === maxScore) {
        result = "Kamu cenderung ke gaya belajar Auditori.";
    } else if (scores.kinesthetic === maxScore) {
        result = "Kamu cenderung ke gaya belajar Kinestetik.";
    }

    document.getElementById("result").classList.remove("hidden");
    resultText.textContent = result;
}
