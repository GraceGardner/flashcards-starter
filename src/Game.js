const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/turn');
const Card = require('../src/Card');
const Round = require('../src/round');
const Deck = require('../src/deck');

class Game {
  constructor() {
    this.deck = undefined;
    this.round = undefined;
  }

  start() {
    let cards = prototypeQuestions.map(card =>
      new Card(card.id, card.question, card.answers, card.correctAnswer))
    this.deck = new Deck(cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
