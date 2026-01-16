const quiz = [
    {
        q: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Preprocessor",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ],
        ans: 0
    },
    {
        q: "CSS is used for?",
        options: ["Logic", "Styling", "Database", "Server"],
        ans: 1
    },
    {
        q: "JS stands for?",
        options: ["Java Source", "Java Script", "Just Script", "J Script"],
        ans: 1
    },
    {
        q: "Bootstrap is?",
        options: ["Framework", "Language", "Server", "Browser"],
        ans: 0
    },
    {
        q: "Which is frontend?",
        options: ["HTML", "PHP", "Node", "MySQL"],
        ans: 0
    }
];

let index = 0;
let score = 0;
let time = 20;
let timer;

document.getElementById("userName").innerText =
    localStorage.getItem("username");

loadQuestion();
startTimer();

function loadQuestion(){
    document.getElementById("qNo").innerText = index + 1;
    document.getElementById("question").innerText = quiz[index].q;

    let optHTML = "";
    quiz[index].options.forEach((opt, i) => {
        optHTML += `
            <div class="form-check">
                <input type="radio" name="opt" value="${i}">
                ${opt}
            </div>
        `;
    });

    document.getElementById("options").innerHTML = optHTML;
}

function nextQuestion(){
    let selected = document.querySelector('input[name="opt"]:checked');

    if(selected && selected.value == quiz[index].ans){
        score++;
    }

    clearInterval(timer);
    index++;

    if(index < quiz.length){
        time = 20;
        loadQuestion();
        startTimer();
    }else{
        alert("Quiz Finished\nScore: " + score);
        location.reload();
    }
}

function startTimer(){
    document.getElementById("timer").innerText = time;

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = time;

        if(time == 0){
            nextQuestion();
        }
    },1000);
}

