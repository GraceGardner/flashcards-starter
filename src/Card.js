class Card {
  constructor(id, question, list, answer) {
    this.id = id;
    this.question = question;
    this.answers = list;
    this.correctAnswer = answer;
  }
}

module.exports = Card;
