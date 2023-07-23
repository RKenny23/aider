const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('nextButton');
const scoreContainer = document.getElementById('scoreContainer');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.style.display = 'none';
  questionContainer.style.display = 'block';
  scoreContainer.style.display = 'block';
  score = 0;
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.choices.forEach(choice => {
    const li = document.createElement('li');
    li.innerText = choice;
    li.addEventListener('click', () => {
      if (choice === question.answer) {
        score++;
        scoreElement.innerText = score;
      }
      li.classList.add(choice === question.answer ? 'correct' : 'incorrect');
      li.removeEventListener('click', () => {});
    });
    choicesElement.appendChild(li);
  });
}

function resetState() {
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
}

const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'What is the largest planet in our solar system?',
    choices: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
    answer: 'Jupiter'
  },
  {
    question: 'Who painted the Mona Lisa?',
    choices: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    answer: 'Leonardo da Vinci'
  }
];
