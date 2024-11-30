let lives = 3;
let revealedTiles = [];
let answer = [];

const categories = {
  people: [
    { src: "images/people/trump.jpg", answer: ["trump", "donald trump"] },
    { src: "images/people/einstin.jpeg", answer: ["einstein", "albert einstein"] },
    { src: "images/people/rock.jpeg", answer: ["rock", "dwayne johnson"] },
    { src: "images/people/audrey.jpeg", answer: ["audrey chen", "audrey"] },
    { src: "images/people/mark.jpg", answer: ["mark zuckerberg", "zuckerberg"] },
    { src: "images/people/witcher.webp", answer: ["witcher", "geralt of rivia"] },
    { src: "images/people/shin.jpg", answer: ["shinchan", "shinnosuke nohara"] },
    { src: "images/people/Mother-Teresa.webp", answer: ["mother teresa", "teresa"] },
    { src: "images/people/GettyImages-2184585949-e1731529335943.webp", answer: ["elon musk", "musk", "elon"] },
  ],
  animals: [
    { src: "images/animal/cat.jpg", answer: ["cat", "kitten"] },
    { src: "images/animal/monkey.jpeg", answer: ["monkey", "ape"] },
    { src: "images/animal/polar.jpg", answer: ["polar bear", "white bear"] },
    { src: "images/animal/rabbit.webp", answer: ["rabbit", "bunny"] },
    { src: "images/animal/pig.jpg", answer: ["pig", "hog"] },
    { src: "images/animal/chihuahua.jpg", answer: ["chihuahua", "dog"] },
    { src: "images/animal/istockphoto-810272740-612x612.jpg", answer: ["lion", "king of the jungle"] },
    { src: "images/animal/eli.jpeg", answer: ["elephant", "jumbo"] },
  ],
  logos: [
    { src: "images/logo/mac.jpg", answer: ["mcdonalds", "mc donalds"] },
    { src: "images/logo/starbucks.png", answer: ["starbucks", "coffee shop"] },
    { src: "images/logo/tesla.png", answer: ["tesla"] },
    { src: "images/logo/android.webp", answer: ["android", "google android"] },
    { src: "images/logo/apple.png", answer: ["apple", "apple inc"] },
    { src: "images/logo/google.webp", answer: ["google", "search engine"] },
    { src: "images/logo/ikea.png", answer: ["ikea"] },
    { src: "images/logo/images.png", answer: ["linkedin", "linkden"] },
    { src: "images/logo/target.png", answer: ["target", "retail store"] },
    { src: "images/logo/netflix.png", answer: ["netflix"] },
  ],
  food: [
    { src: "images/food/bur.jpeg", answer: ["burger", "hamburger"] },
    { src: "images/food/fries.webp", answer: ["french fries", "fries"] },
    { src: "images/food/idli.jpeg", answer: ["idli", "steamed idli"] },
    { src: "images/food/kimchi.jpeg", answer: ["kimchi", "fermented cabbage"] },
    { src: "images/food/pizza.jpg", answer: ["pizza", "cheese pizza"] },
    { src: "images/food/ramen.jpeg", answer: ["ramen", "noodles"] },
  ],
  monuments: [
    { src: "images/monuments/b.webp", answer: ["colosseum", "roman colosseum"] },
    { src: "images/monuments/gwoc.jpg", answer: ["great wall of china", "wall of china"] },
    { src: "images/monuments/lib.jpg", answer: ["statue of liberty", "liberty"] },
    { src: "images/monuments/mountfuji.jpeg", answer: ["mount fuji", "fuji mountain"] },
    { src: "images/monuments/taj.jpg", answer: ["taj mahal", "taj"] },
  ],
  flags: [
    { src: "images/flags/brazel.png", answer: ["brazil", "brazilian flag"] },
    { src: "images/flags/ind.webp", answer: ["india", "indian flag"] },
    { src: "images/flags/ireland.svg", answer: ["ireland", "irish flag"] },
    { src: "images/flags/japan.svg", answer: ["japan", "japanese flag"] },
    { src: "images/flags/korean.jpg", answer: ["korea", "south korea"] },
    { src: "images/flags/uk.webp", answer: ["england", "united kingdom", "uk"] },
  ],
};

function startGame(category) {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("game-page").style.display = "block";
  document.getElementById("category-title").innerText = `Category: ${category}`;

  const categoryImages = categories[category];
  const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
  answer = randomImage.answer.map(ans => ans.toLowerCase()); 
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

  const isCorrect = answer.some(correctAnswer => correctAnswer === userGuess);

  if (isCorrect) {
    document.getElementById("message").innerText = "You WIN!!! Revealing the full image..";
    resultImage.src = "images/correct.jpeg";  
    resultMessage.innerText = "Congratulations! You guessed correctly!";
    resultImage.style.display = "block";
    revealAllTiles(); 
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
  answer = [];
  document.getElementById("message").innerText = "";
  document.getElementById("guess-input").value = "";
  document.getElementById("grid").innerHTML = ""; 
  updateLivesDisplay();
}
