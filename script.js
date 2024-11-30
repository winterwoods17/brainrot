let lives = 3;
let revealedTiles = [];
let answer = "";

const images = {
  people: [
    { src: "images/people/trump.jpg", answer: "trump" },
    { src: "images/people/einstin.jpeg", answer: "einstein" },
    { src: "images/people/rock.jpeg", answer: "rock" },
  ],
  animals: [
    { src: "images/animal/cat.jpg", answer: "cat" },
    { src: "images/animal/monkey.jpeg", answer: "monkey" },
    { src: "images/animal/snake.avif", answer: "snake" },
  ],
  logos: [
    { src: "images/logo/mac.jpg", answer: "mcdonalds" },
    { src: "images/logo/starbucks.png", answer: "starbucks" },
    { src: "images/logo/tesla.png", answer: "tesla" },
  ],
};
function startGame(category) {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("game-page").style.display = "block";
  document.getElementById("category-title").innerText = `Category: ${category}`;

  const categoryImages = images[category];
  const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
  answer = randomImage.answer.toLowerCase();
  const imagePath = randomImage.src + "?t=" + Date.now();
  loadGrid(imagePath);
  autoRevealTwoTiles();
  updateLivesDisplay();
}

function loadGrid(image) {
  const grid = document.getElementById("grid");
  grid.innerHTML = ""; 
  for (let i = 0; i < 25; i++) {
    const tile = document.createElement("div");
    tile.style.backgroundImage = `url(${image})`;
    tile.style.backgroundSize = "300px 300px";
    tile.style.backgroundPosition = `${-(i % 5) * 60}px ${-Math.floor(i / 5) * 60}px`;
    tile.style.visibility = "hidden"; 
    grid.appendChild(tile);
  }
}

function autoRevealTwoTiles() {
  revealRandomTiles(2);
}

function revealRandomTiles(count) {
  let revealed = 0;
  while (revealed < count) {
    const randomIndex = Math.floor(Math.random() * 25);
    if (!revealedTiles.includes(randomIndex)) {
      revealedTiles.push(randomIndex);
      document.querySelectorAll("#grid div")[randomIndex].style.visibility = "visible";
      revealed++;
    }
  }
}

function revealTiles() {
  if (revealedTiles.length === 25 || lives === 0) return; 

  revealRandomTiles(2);
  lives--;
  updateLivesDisplay();
  if (lives === 0) {
    document.getElementById("message").innerText = "Game Over! Revealing the image...";
    revealAllTiles();
  }
}

function revealAllTiles() {
  document.querySelectorAll("#grid div").forEach(tile => (tile.style.visibility = "visible"));
}

function updateLivesDisplay() {
  const livesDisplay = document.getElementById("lives");
  livesDisplay.innerText = `Lives: ${"❤️".repeat(lives)}`;
}

function submitGuess() {
  const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
  const resultImage = document.getElementById("result-image");
  const resultMessage = document.getElementById("result-message");

  
  const modal = document.getElementById("result-modal");

  if (userGuess === answer) {
    document.getElementById("message").innerText = "You WIN!!! Revealing the full image..";
    resultImage.src = "images/correct.jpeg";  
    resultMessage.innerText = "Congratulations! You guessed correctly!";
    resultImage.style.display = "block";
  } else {
    document.getElementById("message").innerText = "Wrong Guess!!! Try Again.";
    resultImage.src = "images/wrong.jpg";   
    resultMessage.innerText = "Oops! Wrong guess, try again.";
    resultImage.style.display = "block";
  }

  modal.style.display = "block"; 
}

function closeModal() {
  const modal = document.getElementById("result-modal");
  modal.style.display = "none"; 
}

function goBack() {
  resetGame();
  document.getElementById("game-page").style.display = "none";
  document.getElementById("home-page").style.display = "block";
}

function onceMore() {
  resetGame();
  startGame(answer); 
}

function resetGame() {
  lives = 3;
  revealedTiles = [];
  answer = "";
  document.getElementById("message").innerText = "";
  document.getElementById("guess-input").value = "";
  document.getElementById("grid").innerHTML = "";
  const resultImage = document.getElementById("result-image");
  resultImage.style.display = "none";  
}

