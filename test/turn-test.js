const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card')

describe('Turn', () => {
  let card;
  let turn;

  beforeEach(() => {
    card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
  })

  beforeEach(() => {
    turn = new Turn("yes", card);
  })

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should take guess', () => {
    const turn = new Turn("yes");
    expect(turn.guess).to.equal("yes");
  })

  it('should hold a card', () => {
    expect(turn.card.correctAnswer).to.equal("yes");
  })

  it('should be able to return a guess', () => {
    expect(turn.returnGuess()).to.equal("yes");
  })

  it('should return a card', () => {
    expect(turn.returnCard()).to.equal(card);
  })

  it('should evaluate a correct guess', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it('should evaluate a incorrect guess', () => {
    const turn = new Turn("no", card);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should give feedback for correct answers', () => {
    expect(turn.giveFeedback()).to.equal("correct!")
  })

  it('should give feedback for incorrect answers', () => {
    const turn = new Turn("no", card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  })
})
