const greetFormEl = document.querySelector('.greet-form');
const greetFormInputEl = document.querySelector('.greet-form .form-input');
const greetFormBtn = document.querySelector('.greet-form .form-button');

greetFormEl.addEventListener('submit', startGame);

let username = 'user';
const words = ['banana', 'apple', 'juice'];

function startGame(event) {
  event.preventDefault();

  const usernameInput = greetFormInputEl.value.trim();
  if (!usernameInput) {
    alert("Please, enter your name.");
    return;
  }
  username = usernameInput;
  alert('Hello, ' + username);
  greetFormEl.style.display = 'none';

  const word = words[Math.floor(Math.random() * words.length)];
  const guessedWord = [];
  for (let i = 0; i < word.length; i ++) {
    guessedWord.push('_');
  }
  console.log(guessedWord);

  // show ui, etc
  

  console.log(word);
  
}