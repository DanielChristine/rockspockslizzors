"use strict";
const gamejs = require("./game");
const Human = require('./human');

class Gestures {
  constructor(value){
      this.value = value;
  }
  //    -------------------- This would be dope if I can get the logic right. ------------------
  //     const rules = {
  //       rock: { win: 'scissors', win: 'lizard'}, 
  //       scissor: {win:'paper', win:'lizard'},
  //       paper: {win:'spock', win:'rock'},
  //       lizard: {win:'paper', win:'spock'},
  //       spock: {win:'scissors', win:'rock'}
  //     }

  //     function compareGestures(rules) {

  //       if (userChoice) {


  //       }
  //     }
  // }

    compareGestures() {
    if (
      this.playerOne.userChoice == "rock" && //chosenGesture doesn't exist anymore. Edit if this is used.
      this.playerTwo.chosenGesture == "scissors"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "rock" &&
      this.playerTwo.chosenGesture == "lizard"
    ) {
      this.playerOne.score++;
      console.log("Player two has won this round!");
    } else if (
      this.playerOne.chosenGesture == "rock" &&
      this.playerTwo.chosenGesture == "paper"
    ) {
      this.playerTwo.score++;

      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "scissors" &&
      this.playerTwo.chosenGesture == "lizard"
    ) {
      this.playerOne.score++;
      console.log("Player one has won this round!");
    } else if (
      this.playerOne.chosenGesture == "scissors" &&
      this.playerTwo.chosenGesture == "paper"
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
  module.exports = Gestures;