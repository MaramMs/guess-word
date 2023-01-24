const inputContainer = document.querySelector(".inputs"),
  desc = document.querySelector(".desc"),
  typingInput = document.querySelector(".typing"),
  count = document.querySelector(".count"),
  winner = document.querySelector(".winner");
btn = document.querySelector(".btn");

const game = [
  {
    word: "css",
    desc: " style",
  },
  {
    word: "bootstrap",
    desc: "framework style",
  },
  {
    word: "react",
    desc: "framework style2",
  },
  {
    word: "js",
    desc: "framework style3",
  },
  {
    word: "css",
    desc: "framework style4",
  },
];

document.addEventListener("keydown", () => typingInput.focus());
typingInput.addEventListener("input", startGame);
let countGuess = 12,
  word,
  countToWin = [];

function getRandomWord() {
  countGuess = 12;
  countToWin = [];
  winner.classList.add("hidden");
  let randomOject = game[Math.floor(Math.random() * game.length)];
  desc.textContent = randomOject.desc;
  count.textContent = countGuess;
  word = randomOject.word;

  let input = "";
  for (let i = 0; i < word.length; i++) {
    input += `<input type="text" disabled>`;

    inputContainer.innerHTML = input;
  }
}
getRandomWord();

function startGame(e) {
  let char = e.target.value;
  if (!char.match(/[a-z]/i)) return;
  if (word.includes(char)) {
    for (let i = 0; i < word.length; i++) {
      if (
        word[i] === char &&
        !inputContainer.querySelectorAll("input")[i].value
      ) {
        inputContainer.querySelectorAll("input")[i].value = char;
        countToWin.push(char);
      }
    }
  } else {
    countGuess--;
  }
  count.textContent = countGuess;
  typingInput.value = "";

  if (countToWin.length === word.length) {
    countToWin = [];
    winner.classList.remove("hidden");
  }

  setTimeout(() => {
    if (countGuess <= 0) {
      alert("try again");
      for (let i = 0; i < word.length; i++) {
        inputContainer.querySelectorAll("input")[i].value = word[i];
      }
    }
  });
}

btn.addEventListener("click", getRandomWord);
