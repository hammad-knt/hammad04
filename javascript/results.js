
const studentName = sessionStorage.getItem("studentName");
const score = sessionStorage.getItem("examScore");
const percentage = sessionStorage.getItem("examPercentage");
const grade = sessionStorage.getItem("examGrade");
const correctAnswers = sessionStorage.getItem("correctAnswers");

const studentNameDisplay = document.getElementById("studentName");
const scoreDisplay = document.getElementById("score");
const percentageDisplay = document.getElementById("percentage");
const gradeDisplay = document.getElementById("grade");
const correctAnswersDisplay = document.getElementById("correctAnswers");

if (studentName === null || score === null) {
    window.location.href = "../index.html";
} else {
    studentNameDisplay.textContent = studentName;
    scoreDisplay.textContent = score;
    percentageDisplay.textContent = percentage + "%";
    gradeDisplay.textContent = grade;
    correctAnswersDisplay.textContent = correctAnswers + " / 20";
}

function viewCorrections() {
    window.location.href = "correction.html";
}

function restartExam() {
    sessionStorage.removeItem("examScore");
    sessionStorage.removeItem("examPercentage");
    sessionStorage.removeItem("examGrade");
    sessionStorage.removeItem("correctAnswers");
    sessionStorage.removeItem("studentAnswers");

    window.location.href = "../index.html";
}
