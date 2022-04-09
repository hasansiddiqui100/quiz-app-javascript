const quizData = [
  {
    Qno: 1,
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
    alreadySubmitted: false,
  },
  {
    Qno: 2,
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    alreadySubmitted: false,
  },
  {
    Qno: 3,
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
    alreadySubmitted: false,
  },
  {
    Qno: 4,
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
    alreadySubmitted: false,
  },
];
const question = document.getElementById("question");
const options = document.querySelectorAll(".options");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const card = document.getElementById("card");
const numbercircle = document.getElementById("numberCircle");
let ok = false;
let quesInc = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselRadioButn();

  let currentQue = quizData[quesInc];

  question.innerText = currentQue.question;

  a_text.innerText = currentQue.a;
  b_text.innerText = currentQue.b;
  c_text.innerText = currentQue.c;
  d_text.innerText = currentQue.d;
  numbercircle.innerText = currentQue.Qno;
}
function getSelected() {
  let answer;
  options.forEach((opt) => {
    if (opt.checked) {
      answer = opt.id;
    }
  });
  return answer;
}
function deselRadioButn() {
  options.forEach((opt) => (opt.checked = false));
}
function deselSubmitanswers() {
  options.forEach((opt) => (opt.alreadySubmitted = false));
}
function submitButton() {
  // debugger;
  const selected = getSelected();

  if (quizData[quesInc].alreadySubmitted) {
    alert("already submitted answer move next");
    move()
  } else if (selected) {
    if (selected === quizData[quesInc].correct) {
      score++;
    }

    quizData[quesInc].alreadySubmitted = true;
    console.log(score);
    ok = true;
  } else {
    alert("select option first");
  }
}

function next() {
  debugger;
  submitButton();
  if (ok) {
    move();
  }
}

function previous() {
  if (quesInc > 0) {
    move(false);
  } else {
    alert("already on first question");
  }
}

function move(advance = true) {
  ok = false;
  // quesInc =(quesInc + (advance ? 1 : -1) + quizData.length) % quizData.length;
  // currentId = arr[currentIndex]._id;
  quesInc = quesInc + (advance ? 1 : -1);
  if (quesInc < quizData.length) {
    loadQuiz();
  } else {
    card.innerHTML = `
  <h2>you answered ${score}/${quizData.length} question correctly</h2>
  <button   onclick="location.reload();deselSubmitanswers();">Reload</button>
  `;
  }
}
