const uiElements = {
  greetFormEl: document.querySelector('.greet-form'),
  greetFormInputEl: document.querySelector('.greet-form .form-input'),
  greetFormBtn: document.querySelector('.greet-form .form-button'),
  hiddenWordEl: document.querySelector('.word'),
  usedLetters: document.querySelector('.used-letters'),
  triesLeft: document.querySelector('.tries-left'),
  messageToUser: document.querySelector('.message')
}

uiElements.greetFormEl.addEventListener('submit', startGame);

let username = 'user';
const words = ['banana', 'apple', 'juice'];
let usedLetters = [];
let triesLeft = 8;
let word;
let guessedWord = [];
let lettersLeft;

// while (triesLeft > 0 || lettersLeft > 0) {
//   updateGameStatus();
//   messageUser("Guess the letter!");
// }

function startGame(event) {
  event.preventDefault();

  const usernameInput = uiElements.greetFormInputEl.value.trim();
  if (!usernameInput) {
    alert("Please, enter your name.");
    return;
  }
  username = usernameInput;
  alert('Hello, ' + username);
  hideGreet();
  
  word = words[Math.floor(Math.random() * words.length)];
  for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
  }
  alert(`Welcome, ${username}!`);

  console.log(guessedWord);
  console.log(word);
}

function updateGameStatus() {
  uiElements.hiddenWordEl.textContent = guessedWord.join(' ');
  uiElements.usedLetters.textContent = "Used letters: " + usedLetters.join(' ');
  uiElements.triesLeft.textContent = "Tries left: " + triesLeft;
}

function messageUser(message) {
  uiElements.messageToUser.textContent = message;
}

function hideGreet() {
  uiElements.greetFormEl.style.display = 'none';
}