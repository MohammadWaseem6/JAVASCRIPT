let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#sbmt");
const guess_slot = document.querySelector(".gusses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".result_Paras");
const p = document.createElement("p");
let Prevguess = [];
let Numguess = 1;
let PlayGame = true;

if (PlayGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const userinput = document.querySelector("#guessfield").value;
    const guess = parseInt(userinput);
    validate_guess(guess);
  });
}

function validate_guess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid number more than 1 ");
  } else if (guess > 100) {
    alert("Please enter a valid number less than 100");
  } else {
    Prevguess.push(guess);
    if (Numguess === 11) {
      displayguess();
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed right `);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else {
    // This condition is for when guess > randomNumber
    displayMessage(`Number is too high`);
  }
}

function displayguess(guess) {
  document.querySelector("#guessfield").value = "";
  guess_slot.innerHTML += `${guess}; `;
  Numguess++;
  remaining.innerHTML = `${11 - Numguess}`;
}

function displayMessage(Message) {
  lowOrHi.innerHTML = `<h2>${Message}</h2>`;
}

function endGame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startover.appendChild(p);
  PlayGame = false;
  newGame();
}

function newGame() {
  const newGamebutton = document.querySelector("#newGame");
  newGamebutton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    Prevguess = [];
    Numguess = 1;
    guess_slot.innerHTML = "";
    remaining.innerHTML = `${11 - Numguess}`;
    userinput.removeAttribute("disabled");
    startover.removeChild(p);
    PlayGame = true;
  });
}
