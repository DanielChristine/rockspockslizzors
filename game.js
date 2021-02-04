"use strict";

const PlayerType = require('./player');

class Game {
  constructor() {
    this.playerOne = new Human;
    this.playerTwo = '';
  }
  displayWelcome() {
    console.log("Welcome to Daniel's version of RPSLS!");
  }

  runGame() {
    this.displayWelcome();
    this.choosePlayers();

    this.playerOne.chosenGesture = this.playerOne.chooseGesture();
    this.playerTwo.chosenGesture = this.playerTwo.chooseGesture();

    this.gameTurns();
  }

  gameTurns() {
    this.playerOne.chosenGesture = this.playerOne.chooseGesture();
    this.playerTwo.chosenGesture = this.playerTwo.chooseGesture();
    this.compareGestures();
    if (this.playerOne.score < 3 || this.playerTwo.score < 3) {
      console.log("Round complete");
    } else if (this.playerOne.score == 3) {
      console.log("You're the winner.");
    } else if (this.playerTwo.score == 3) {
      console.log("Player two wins.");
    }
    this.runGame();
  }

  compareGestures() {
    if (
      this.playerOne.chosenGesture == "Rock" &&
      this.playerTwo.chosenGesture == "Scissors"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Rock" &&
      this.playerTwo.chosenGesture == "Lizard"
    ) {
      this.playerOne.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Rock" &&
      this.playerTwo.chosenGesture == "Paper"
    ) {
      this.playerTwo.score++;

      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Scissors" &&
      this.playerTwo.chosenGesture == "Lizard"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Scissors" &&
      this.playerTwo.chosenGesture == "Paper"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Lizard" &&
      this.playerTwo.chosenGesture == "Spock"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Lizard" &&
      this.playerTwo.chosenGesture == "Paper"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Spock" &&
      this.playerTwo.chosenGesture == "Scissors"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "Spock" &&
      this.playerTwo.chosenGesture == "Rock"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Rock" &&
      this.playerOne.chosenGesture == "Scissors"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Rock" &&
      this.playerOne.chosenGesture == "Lizard"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Scissors" &&
      this.playerOne.chosenGesture == "Lizard"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Scissors" &&
      this.playerOne.chosenGesture == "Paper"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Lizard" &&
      this.playerOne.chosenGesture == "Spock"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Lizard" &&
      this.playerOne.chosenGesture == "Paper"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Spock" &&
      this.playerOne.chosenGesture == "Scissors"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerTwo.chosenGesture == "Spock" &&
      this.playerOne.chosenGesture == "Rock"
    ) {
      this.playerTwo.score++;
      console.log("Player two has won this round!");
    } else if (this.playerTwo.chosenGesture == this.playerOne.chosenGesture) {
      console.log("This round is a tie. Try harder.");
    }
  }
}

module.exports.Game = Game;

let game = new Game();
game.runGame();
console.log(game);
