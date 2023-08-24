const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const image1 = document.querySelector(".img1");
image1.src = `images/dice${randomNumber1}.png`;

const image2 = document.querySelector(".img2");
image2.src = `images/dice${randomNumber2}.png`;

console.log(`${randomNumber1} and ${randomNumber2}`);

const results = () => {
  const h1 = document.querySelector("h1");

  if (randomNumber1 === randomNumber2) {
    h1.innerText = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    h1.innerText = "🚩 Player 1 Wins!";
  } else {
    h1.innerText = "Player 2 wins! 🚩";
  }
};

results();
