const Turn = require('../src/turn');

class Round {
  constructor(deck) {
    this.turns = [];
    this.deck = deck;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[this.turns.length];
    this.usedCards = []
  }

  returnCurrentCard() {
    if(this.turns.length < this.deck.cards.length){
      return this.currentCard;
    }
  }

  takeTurn(guess) {
    this.currentCard = this.deck.cards[this.turns.length];
    const newTurn = new Turn(guess, this.currentCard);
    this.turns.push(newTurn);
    switch (newTurn.evaluateGuess()) {
      case false:
        this.incorrectGuesses.push(this.currentCard.id);
        break;
        default:
    }
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    let numCorrect = this.deck.cards.length - this.incorrectGuesses.length
    return numCorrect/this.deck.cards.length * 100
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
