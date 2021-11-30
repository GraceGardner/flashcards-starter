class Turn {
  constructor(guess, card) {
    this.guess = guess || undefined;
    this.card = card || undefined;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    switch(this.guess) {
      case this.card.correctAnswer:
      return true;
        break;
      default:
      return false;
    }
  }
}

module.exports = Turn;
