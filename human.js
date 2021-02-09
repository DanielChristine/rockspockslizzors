"use strict";

const gamejs = require("./game");

class Human extends PlayerType {
    constructor() {
      super();
      this.playerOne;
    }
    chooseGesture() {
      let userChoice = promptFor(
        "Choose a number: 0.) Rock, 1.) Scissors, 2.) Paper, 3.) Lizard,  4.) Spock.");
      if (
        userChoice === "1" ||
        userChoice === "2" ||
        userChoice === "3" ||
        userChoice === "4" ||
        userChoice === "5"
      ) {
        return userChoice;
      } else {
        console.log("Error: Input invalid: " + userChoice);
        this.chooseGesture(); // restart method, reprompt for proper input.
      }
    }

    
  }

  function promptFor(question, valid) {
    do {
      var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
  }

  module.exports = Human;