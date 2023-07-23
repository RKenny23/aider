const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreContainer = document.getElementById('scoreContainer');
const finalScoreElement = document.getElementById('finalScore');
const restartButton = document.getElementById('restartButton');
const scoreElement = document.getElementById('currentScore');

let currentQuestionIndex = 0;
let score = 0;
let highScore = 0;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
  startButton.style.display = 'none';
  restartButton.style.display = 'none';
  questionContainer.style.display = 'block';
  scoreContainer.style.display = 'block';
  score = 0;
  scoreElement.innerText = score;
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    currentQuestionIndex++;
  } else {
    endGame();
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.innerText = choice;
    button.addEventListener('click', () => {
      if (choice === question.answer) {
        score++;
        scoreElement.innerText = score;
        button.classList.add('correct');
      } else {
        button.classList.add('incorrect');
      }
      disableButtons();
      setTimeout(setNextQuestion, 1000);
    });
    choicesElement.appendChild(button);
  });
}

function resetState() {
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
  enableButtons();
}

function disableButtons() {
  const buttons = choicesElement.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

function enableButtons() {
  const buttons = choicesElement.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.remove('correct', 'incorrect');
  }
}

function endGame() {
  questionContainer.style.display = 'none';
  finalScoreElement.style.display = 'block';
  finalScoreElement.innerText = `Score: ${score}`;
  restartButton.style.display = 'block';
}

function restartGame() {
  questionContainer.style.display = 'none';
  finalScoreElement.style.display = 'none';
  restartButton.style.display = 'none';
  scoreContainer.style.display = 'none';
  startButton.style.display = 'block';
  highScore = 0;
}

const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    choices: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
    answer: 'Jupiter',
  },
  {
    question: 'Who painted the Mona Lisa?',
    choices: [
      'Leonardo da Vinci',
      'Pablo Picasso',
      'Vincent van Gogh',
      'Michelangelo',
    ],
    answer: 'Leonardo da Vinci',
  },
  // Add 10 more questions here
  {
    question: 'What is the capital of Japan?',
    choices: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
    answer: 'Tokyo',
  },
  {
    question: 'What is the largest ocean in the world?',
    choices: [
      'Pacific Ocean',
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
    ],
    answer: 'Pacific Ocean',
  },
  {
    question: 'Who wrote the novel "Pride and Prejudice"?',
    choices: [
      'Jane Austen',
      'Emily Bronte',
      'Charlotte Bronte',
      'Virginia Woolf',
    ],
    answer: 'Jane Austen',
  },
  {
    question: 'What is the chemical symbol for gold?',
    choices: ['Au', 'Ag', 'Fe', 'Cu'],
    answer: 'Au',
  },
  {
    question: 'Which country is known as the "Land of the Rising Sun"?',
    choices: ['Japan', 'China', 'Korea', 'Thailand'],
    answer: 'Japan',
  },
  {
    question: 'Who is the author of "To Kill a Mockingbird"?',
    choices: [
      'Harper Lee',
      'F. Scott Fitzgerald',
      'Mark Twain',
      'Ernest Hemingway',
    ],
    answer: 'Harper Lee',
  },
  {
    question: 'What is the largest organ in the human body?',
    choices: ['Skin', 'Heart', 'Liver', 'Brain'],
    answer: 'Skin',
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    choices: ['Mars', 'Venus', 'Mercury', 'Neptune'],
    answer: 'Mars',
  },
  {
    question: 'Who is the artist of the famous painting "The Starry Night"?',
    choices: [
      'Vincent van Gogh',
      'Pablo Picasso',
      'Leonardo da Vinci',
      'Claude Monet',
    ],
    answer: 'Vincent van Gogh',
  },
];
