const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should take guess', function() {
    const turn = new Turn("yes");
    expect(turn.guess).to.equal("yes");
  })

  it('should hold a card', function() {
    const card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const turn = new Turn("yes", card);
    expect(turn.card.correctAnswer).to.equal("yes");
  })

  it('should be able to return a guess', function() {
    const card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const turn = new Turn("yes", card);
    expect(turn.returnGuess()).to.equal("yes");
  })

  it('should return a card', function() {
    const card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const turn = new Turn("yes", card);
    expect(turn.returnCard()).to.equal(card);
  })

  it.skip('should evaluate a correct guess', function() {
    const card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const turn = new Turn("yes", card);
    expect(turn.evaluateGuess()).to.equal(true);
  })

  it.skip('should evaluate a incorrect guess', function() {
    const card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const turn = new Turn("no", card);
    expect(turn.evaluateGuess()).to.equal(false);
  })

  it.skip('should give feedback for correct answers', function() {
    const card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const turn = new Turn("yes", card);
    expect(turn.giveFeedback()).to.equal("correct!")
  })

  it.skip('should give feedback for incorrect answers', function() {
    const card = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const turn = new Turn("no", card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  })
})
