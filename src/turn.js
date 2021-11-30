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

  giveFeedback() {
    switch (this.evaluateGuess()) {
      case true:
        return "correct!"
        break;
      default:

    }
  }
}

module.exports = Turn;
