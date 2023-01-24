const inputContainer = document.querySelector(".inputs"),
  desc = document.querySelector(".desc"),
  typingInput = document.querySelector(".typing"),
  count = document.querySelector(".count"),
  winner = document.querySelector(".winner");
btn = document.querySelector(".btn");

const game = [
    {
      word: "react",
      desc: "JavaScript library",
    },
    {
      word: "vue",
      desc: "JavaScript Framework",
    },
    {
      word: "angular",
      desc: "JavaScript MVW Framework",
    },
    {
      word: "nodejs",
      desc: "JavaScript runtime environment",
    },
    {
      word: "php",
      desc: "general-purpose scripting language",
    },
    {
      word: "ruby",
      desc: "open source programming language",
    },
    {
      word: "python",
      desc: "Programming Language",
    },
    {
      word: "tailwind",
      desc: "A utility-first CSS framework",
    },
    {
      word: "bootstrap",
      desc: "world's most famous free CSS framework",
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
