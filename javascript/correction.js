
const studentName = sessionStorage.getItem("studentName");
const studentNameDisplay = document.getElementById("studentName");
const correctionsContainer = document.getElementById("correctionsContainer");

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

let savedAnswers = sessionStorage.getItem("studentAnswers");
let studentAnswers = [];

if (studentName === null || savedAnswers === null) {
    window.location.href = "../index.html";
} else {
    studentAnswers = JSON.parse(savedAnswers);
    studentNameDisplay.textContent = "Student: " + studentName;
    displayCorrections();
}

function displayCorrections() {
    for (let i = 0; i < questions.length; i++) {
        let questionDiv = document.createElement("div");
        questionDiv.className = "correction-question";

        let questionHeading = document.createElement("h3");
        questionHeading.textContent =
            (i + 1) + ". " + questions[i].question;

        let yourAnswer = document.createElement("p");
        yourAnswer.className = "your-answer";

        if (studentAnswers[i] === -1) {
            yourAnswer.textContent = "Your answer: Not answered";
        } else {
            yourAnswer.textContent =
                "Your answer: " + questions[i].options[studentAnswers[i]];
        }

        let correctAnswer = document.createElement("p");
        correctAnswer.className = "correct-answer";
        correctAnswer.textContent =
            "Correct answer: " + questions[i].options[questions[i].answer];

        questionDiv.appendChild(questionHeading);
        questionDiv.appendChild(yourAnswer);
        questionDiv.appendChild(correctAnswer);

        correctionsContainer.appendChild(questionDiv);
    }
}

function restartExam() {
    sessionStorage.removeItem("examScore");
    sessionStorage.removeItem("examPercentage");
    sessionStorage.removeItem("examGrade");
    sessionStorage.removeItem("correctAnswers");
    sessionStorage.removeItem("studentAnswers");

    window.location.href = "../index.html";
}

function goToResults() {
    window.location.href = "results.html";
}
