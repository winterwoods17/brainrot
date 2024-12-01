# Guessing Game

## Overview

The Guessing Game is an interactive game where players guess an image hidden behind a grid of tiles. Players are presented with a category (People, Logos, Animals, Food, Flags, or Monuments) and must try to identify the image by guessing after revealing parts of the grid.

## Features

- **Pick Your Card**: Players can choose from six categories: People, Logos, Animals, Food, Flags, and Monuments.
- **Grid Functionality**: The grid consists of multiple tiles that cover the image. Players reveal parts of the image by clicking the "Reveal More Tiles" button.
- **Lives System**: Players have a limited number of lives to guess the image correctly. Each wrong guess decreases the player's lives.
- **Guessing**: Players can input their guess into a text field. If they guess correctly, they win the game; if not, they can continue revealing more tiles and guessing.
- **Result Modal**: At the end of the game, whether won or lost, a modal displays the result with the image and a message.
- **Responsive Design**: The game is designed to be fully responsive, with adjustments for different screen sizes (including mobile devices).

## Structure

### Home Page

On the home page, the user is presented with the following categories to choose from:

- People
- Logos
- Animals
- Food
- Flags
- Monuments

Each card is clickable, and when clicked, it starts the game with the corresponding category.

### Game Page

Once the category is selected, the game page is shown with the following components:

- **Grid**: A grid of tiles (dynamic size depending on the category) that covers the image. The tiles will be revealed as the player progresses.
- **Lives Display**: Displays the number of lives the player has left.
- **Guessing Box**: A text input box for the player to enter their guess.
- **Reveal More Tiles Button**: Allows the player to reveal more tiles of the image.
- **Submit Guess Button**: Submits the guess and checks whether it is correct or not.
- **Go Back Button**: Takes the player back to the home page to start a new game.

### Result Modal

Once the game ends, a modal is displayed with the following:

- **Result Image**: The full image that the player was trying to guess.
- **Result Message**: A message telling the player whether they won or lost.

## Technologies Used

- **HTML**: Used to structure the content of the game.
- **CSS**: Used to style the page and make it responsive.
- **JavaScript**: Controls the game logic, including the interaction with the grid, revealing tiles, and checking the guesses.

## How It Works

### Categories

- **People**: The category includes images of famous people.
- **Logos**: Contains logos from different brands.
- **Animals**: Includes images of animals from various species.
- **Food**: Includes images of different food items.
- **Flags**: Displays flags from different countries.
- **Monuments**: Includes images of famous monuments around the world.

### Grid Functionality

The grid is populated dynamically when the player starts the game. Each cell in the grid represents a part of the image. Initially, all the tiles are hidden, and as the player clicks the "Reveal More Tiles" button, more parts of the image are revealed. The goal is to guess the image correctly before running out of lives.

### Lives System

The player has a limited number of lives, which can be used to make incorrect guesses. When a guess is incorrect, the number of lives decreases. If the player runs out of lives, the game ends and they are shown the result modal.

### Guessing

To make a guess, the player must type their guess into the input box and press the "Submit" button. If the guess is correct, the player wins and the game ends. If the guess is incorrect, the player can continue to reveal more tiles and guess again.

### Result Modal

The result modal is displayed when the game ends. It includes the full image and a message indicating whether the player won or lost.

## Installation

1. Clone or download the repository.
2. Open the `index.html` file in your browser to play the game.

## Future Improvements

- Add a timer to make the game more challenging.
- Include a score tracker to keep track of the player's progress across multiple games.
- Add more categories or allow users to upload custom images.

## License

This project is open-source and available under the [MIT License](LICENSE).
