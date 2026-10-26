
const studentName = sessionStorage.getItem("studentName");

const studentNameDisplay = document.getElementById("studentName");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const endExamBtn = document.getElementById("endExamBtn");
const examMessage = document.getElementById("examMessage");

const questions = [
    {
        question: "What is the capital of Nigeria?",
        options: ["Lagos", "Abuja", "Kano", "Ibadan"],
        answer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: 2
    },
    {
        question: "How many days are in a leap year?",
        options: ["365", "366", "364", "360"],
        answer: 1
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: ["Charles Dickens", "William Shakespeare", "Chinua Achebe", "Wole Soyinka"],
        answer: 1
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "How many continents are there?",
        options: ["Five", "Six", "Seven", "Eight"],
        answer: 2
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["CO2", "O2", "H2O", "NaCl"],
        answer: 2
    },
    {
        question: "Which organ pumps blood around the body?",
        options: ["Lungs", "Brain", "Liver", "Heart"],
        answer: 3
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Yen", "Won", "Dollar"],
        answer: 1
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        answer: 2
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["Five", "Six", "Seven", "Eight"],
        answer: 1
    },
    {
        question: "Which language is primarily used to structure web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: 0
    },
    {
        question: "What is the process by which plants make food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"],
        answer: 1
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["India", "China", "Japan", "Thailand"],
        answer: 1
    },
    {
        question: "What is 12 multiplied by 8?",
        options: ["84", "88", "96", "108"],
        answer: 2
    },
    {
        question: "Which gas do humans need to breathe to survive?",
        options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
        answer: 2
    },
    {
        question: "What is the closest star to Earth?",
        options: ["Sirius", "The Sun", "Polaris", "Alpha Centauri"],
        answer: 1
    },
    {
        question: "Which is the largest land animal?",
        options: ["Lion", "Giraffe", "Hippopotamus", "African elephant"],
        answer: 3
    },
    {
        question: "How many minutes are in one hour?",
        options: ["30", "45", "60", "100"],
        answer: 2
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: 1
    }
];

let currentQuestion = 0;
let studentAnswers = [];

for (let i = 0; i < questions.length; i++) {
    studentAnswers[i] = -1;
}

if (studentName === null) {
    window.location.href = "../index.html";
} else {
    studentNameDisplay.textContent = studentName;
    displayQuestion();
}

function displayQuestion() {
    questionNumber.textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionText.textContent = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";
    examMessage.textContent = "";

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        let optionLabel = document.createElement("label");
        optionLabel.className = "option";

        let optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "answer";
        optionInput.value = i;

        if (studentAnswers[currentQuestion] === i) {
            optionInput.checked = true;
        }

        let optionText = document.createElement("span");
        optionText.textContent = questions[currentQuestion].options[i];

        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(optionText);
        optionsContainer.appendChild(optionLabel);
    }

    previousBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextBtn.hidden = true;
        endExamBtn.hidden = false;
    } else {
        nextBtn.hidden = false;
        endExamBtn.hidden = true;
    }
}

function saveAnswer() {
    let answerOptions = document.getElementsByName("answer");

    for (let i = 0; i < answerOptions.length; i++) {
        if (answerOptions[i].checked) {
            studentAnswers[currentQuestion] = Number(answerOptions[i].value);
        }
    }
}

function nextQuestion() {
    saveAnswer();

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    saveAnswer();

    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function endExam() {
    saveAnswer();

    let unanswered = 0;

    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === -1) {
            unanswered++;
        }
    }

    if (unanswered > 0) {
        let confirmEnd = confirm(
            "You have " + unanswered +
            " unanswered question(s). Are you sure you want to end the exam?"
        );

        if (confirmEnd === false) {
            return;
        }
    }

    let score = 0;
    let correctAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
        if (studentAnswers[i] === questions[i].answer) {
            score += 5;
            correctAnswers++;
        }
    }

    let percentage = score;
    let grade = "";

    if (percentage >= 75) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else if (percentage >= 35) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    sessionStorage.setItem("examScore", score);
    sessionStorage.setItem("examPercentage", percentage);
    sessionStorage.setItem("examGrade", grade);
    sessionStorage.setItem("correctAnswers", correctAnswers);
    sessionStorage.setItem("studentAnswers", JSON.stringify(studentAnswers));

    window.location.href = "results.html";
}
