const questions = [
  {
    question: `What will be the output?

System.out.println(10 / 3);`,
    options: ["3.33", "3", "4", "Error"],
    answer: "3"
  },

  {
    question: `Which keyword is used to inherit a class in Java?`,
    options: ["implements", "extends", "inherit", "super"],
    answer: "extends"
  },

  {
    question: `What will be the output?

String s = "Java";
System.out.println(s.charAt(2));`,
    options: ["J", "a", "v", "Error"],
    answer: "v"
  },

  {
    question: `Which method is the entry point of Java program?`,
    options: [
      "start()",
      "run()",
      "main()",
      "execute()"
    ],
    answer: "main()"
  },

  {
    question: `What will be the output?

System.out.println(5 + 2 + "Java");`,
    options: [
      "52Java",
      "7Java",
      "Java7",
      "Error"
    ],
    answer: "7Java"
  },

  {
    question: `Which data type stores true/false values?`,
    options: [
      "int",
      "String",
      "boolean",
      "float"
    ],
    answer: "boolean"
  },

  {
    question: `What will be the output?

int x = 5;
System.out.println(++x);`,
    options: [
      "5",
      "6",
      "4",
      "Error"
    ],
    answer: "6"
  },

  {
    question: `Which loop is guaranteed to execute at least once?`,
    options: [
      "for",
      "while",
      "do-while",
      "foreach"
    ],
    answer: "do-while"
  },

  {
    question: `What will be the output?

System.out.println("Java".length());`,
    options: [
      "3",
      "4",
      "5",
      "Error"
    ],
    answer: "4"
  },

  {
    question: `Which operator is used for object creation in Java?`,
    options: [
      "create",
      "make",
      "new",
      "class"
    ],
    answer: "new"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

const scoreBox = document.getElementById("scoreBox");
const finalScore = document.getElementById("finalScore");
const level = document.getElementById("level");

loadQuestion();

function loadQuestion() {

  if(currentQuestion >= questions.length){
    showFinal();
    return;
  }

  const q = questions[currentQuestion];

  questionEl.innerText = q.question;

  optionsEl.innerHTML = "";

  q.options.forEach(option => {

    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => checkAnswer(option);

    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected){

  const correct = questions[currentQuestion].answer;

  if(selected === correct){

    score++;

    resultEl.style.color = "#00ff99";
    resultEl.innerText = "Correct Answer";

    currentQuestion++;

    setTimeout(() => {
      resultEl.innerText = "";
      loadQuestion();
    }, 1000);

  } else {

    resultEl.style.color = "#ff4d6d";
    resultEl.innerText = "Wrong Answer";

    setTimeout(() => {
      showFinal();
    }, 1000);
  }
}

function showFinal(){

  document.querySelector(".quiz-box").style.display = "none";
  scoreBox.style.display = "block";

  finalScore.innerText = `Your Score: ${score}`;

  let userLevel = "";

  if(score <= 2){
    userLevel = "Beginner Java Learner";
  }
  else if(score <= 5){
    userLevel = "Intermediate Java Coder";
  }
  else if(score <= 8){
    userLevel = "Advanced Java Programmer";
  }
  else{
    userLevel = "Java Master";
  }

  level.innerText = `Level: ${userLevel}`;
}

function restartQuiz(){

  currentQuestion = 0;
  score = 0;

  document.querySelector(".quiz-box").style.display = "block";
  scoreBox.style.display = "none";

  loadQuestion();
}