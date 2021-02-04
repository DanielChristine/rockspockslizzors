 "use strict";

const gamejs = require('./game');


class PlayerType {
    constructor() {
      this.name = "Player";
      this.score = 0;
      this.chosenGesture;
    }
    choosePlayers() {
      let playerCount = promptFor("Do you want to a solo game?", yesNo);
      this.playerOne == new Human();

      function yesNo(playerCount) {
        return (
          playerCount.toLowerCase() == "yes" || playerCount.toLowerCase() == "no");
      }
  
      if (playerCount = "yes") {
        this.playerTwo == new Computer();
        return this.playerTwo;
      } else if (playerCount = "no") {
        this.playerTwo == new Human();
        return this.playerTwo;
      }
    }
  }
  
  class Human extends PlayerType {
    constructor() {
      super();
      this.playerOne
    }
    chooseGesture() {
      let userChoice = promptFor(
        "Choose: Rock Scissors Paper Lizard Spock.",
        chars
      );
      if (
        userChoice === "Rock" ||
        userChoice === "Scissors" ||
        userChoice === "Paper" ||
        userChoice === "Lizard" ||
        userChoice === "Spock"
      ) {
        return userChoice.toLowerCase();
      } else {
        console.log("Error: Input invalid: " + userChoice);
        this.chooseGesture(); // restart method, reprompt for proper input.
      }
    }
  }
  class Computer extends PlayerType {
    constructor() {
      super();
      this.name = "Cortana";
    }
  
    // random() {
    //   let randomNumber = Math.floor(Math.random() * this.randomComputerNumber.length);
    //   return randomNumber;
    // }
  
    computerGesture() {
      let randomComputerNumber = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
      return randomComputerNumber[Math.floor(Math.random() * this.randomComputerNumber.length)];
    }
  }

  function promptFor(question, valid) {
    do {
      var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
  }
  
  function chars(userChoice) {
    return true;
  }
  
module.exports.PlayerType = PlayerType;
module.exports.choosePlayers = choosePlayers();