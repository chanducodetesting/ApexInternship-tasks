const quizData = [
{
question:"Which language is used for webpage structure?",
answers:["CSS","HTML","Java","Python"],
correct:"HTML"
},

{
question:"Which language styles webpages?",
answers:["JavaScript","HTML","CSS","SQL"],
correct:"CSS"
},

{
question:"Which language adds interactivity?",
answers:["JavaScript","CSS","C++","Java"],
correct:"JavaScript"
}

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion(){
    const current = quizData[currentQuestion];
    questionEl.innerText = current.question;
    answersEl.innerHTML = "";
    current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => {
            if(answer === current.correct){
                score++;
            }
            nextBtn.style.display = "block";
        });
        answersEl.appendChild(button);
    });
}
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed";
        answersEl.innerHTML = "";
        nextBtn.style.display = "none";
        resultEl.innerText =
        `Your Score: ${score}/${quizData.length}`;
    }
});

loadQuestion();
async function getJoke(){
    const response =
    await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    document.getElementById("joke").innerText =
    `${data.setup} - ${data.punchline}`;
}