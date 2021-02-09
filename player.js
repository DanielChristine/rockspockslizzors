"use strict";

const gamejs = require("./game");

class PlayerType {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.chosenGesture;
  }
}

module.exports = PlayerType;
