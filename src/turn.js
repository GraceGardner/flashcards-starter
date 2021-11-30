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
}

module.exports = Turn;
