"use strict";

const PlayerType = require('./player');
const Gestures = require('./gestures');
const Computer = require('./computer');
const Human = require('./human');

class Game {
  constructor() {
    this.playerOne = new Human();
    this.playerTwo;
  }
  displayWelcome() {
    console.log("Welcome to Daniel's version of RPSLS!");
  }

  choosePlayers() {
    let playerCount = promptFor("Enter 1 for 1 player game. Enter 2 for two player game.");

       if (playerCount = "1") {
      this.playerTwo == new Computer();
    } else if (playerCount = "2") {
      this.playerTwo == new Human();
    }
  }

  runGame() {
    this.displayWelcome();
    this.choosePlayers();

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
}

module.exports.Game = Game;

let game = new Game();
game.runGame();
console.log(game);
