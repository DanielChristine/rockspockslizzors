"use strict";

const gamejs = require("./game");

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
      return randomComputerNumber[
        Math.floor(Math.random() * this.randomComputerNumber.length)
      ];
    }
  }

  module.exports = Computer;