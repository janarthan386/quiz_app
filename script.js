const quiz = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Django"],
        answer: 3
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: 0
    },
    {
        question: "Which method is used to fetch data in JS?",
        options: ["fetch()", "get()", "call()", "request()"],
        answer: 0
    }
];

let currentIndex = 0;
let score = 0;
let timeLeft = 20;
let timer;

const questionText = document.getElementById("questionText");
const options = document.querySelectorAll(".option");
const timerDisplay = document.getElementById("timer");
const questionNumber = document.getElementById("questionNumber");

loadQuestion();
startTimer();

function loadQuestion() {
    questionText.innerText = quiz[currentIndex].question;
    questionNumber.innerText = currentIndex + 1;

    options.forEach((btn, index) => {
        btn.innerText = quiz[currentIndex].options[index];
        btn.classList.remove("active");
    });

    resetTimer();
}

function checkAnswer(selected) {
    if (selected === quiz[currentIndex].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    clearInterval(timer);

    if (currentIndex < quiz.length - 1) {
        currentIndex++;
        loadQuestion();
        startTimer();
    } else {
        showResult();
    }
}

function startTimer() {
    timeLeft = 20;
    timerDisplay.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        if (timeLeft === 0) {
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 20;
    timerDisplay.innerText = timeLeft;
}

function showResult() {
    document.querySelector(".card-body").innerHTML = `
        <h3 class="text-center">Quiz Completed 🎉</h3>
        <p class="text-center">Your Score: <b>${score} / ${quiz.length}</b></p>
        <div class="text-center">
            <button class="btn btn-success" onclick="location.reload()">Restart Quiz</button>
        </div>
    `;
}


