const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');
const Round = require('../src/round');
const Deck = require('../src/deck');
const prototypeData = require('../src/data');

describe('Round', () => {
  let cards;
  let deck;
  let turn;

  beforeEach(() => {
    const cardOne = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const cardTwo = new Card(124, "Is this question 2?", ["yes", "no"], "yes");
    const cardThree = new Card(125, "Is this not question 3?", ["yes", "no"], "no");
    const cardFour = new Card(125, "Is this not question 3?", ["yes", "no"], "yes");
    cards = [cardOne, cardTwo, cardThree];
    deck = new Deck(cards);
  })



  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  })

  it('should record turns', () => {
    const round = new Round();
    expect(round.turns.length).to.equal(0);
  })

  it('should take an instance of deck', () => {
    const round = new Round(deck);
    expect(round.deck).to.be.an.instanceof(Deck);
  })

  it('should have a place to store incorrect guesses', () => {
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.equal([]);
  })

  it('should have a current card', () => {
    const round = new Round(deck);
    expect(round.currentCard).to.equal(deck.cards[0]);
  })


  it('should return the current card', () => {
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  })

  it('should have a takeTurn method', () => {
    const round = new Round(deck);
    expect(round.takeTurn()).to.be.a('function')
  })

  it('should update turn count each turn', () => {
    const round = new Round(deck);
    round.takeTurn();
    expect(round.turns.length).to.equal(1);
  })

  it('should update turn count multiple times', () => {
    const round = new Round(deck);
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    expect(round.turns.length).to.equal(3);
  })

  it('should not count more turns than cards in deck', () => {
    const round = new Round(deck);
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    round.takeTurn();
    expect(round.turns.length).to.equal(4);
  })

  it('should give feedback for correct guess', () => {
    const round = new Round(deck);
    expect(round.takeTurn("yes")).to.equal('correct!');
  })

  it('should give feedback for correct guess', () => {
    const round = new Round(deck);
    expect(round.takeTurn("no")).to.equal('incorrect!');
  })

  it('should store ids of incorrect guesses', () => {
    const round = new Round(deck);
    round.takeTurn("no");
    expect(round.incorrectGuesses).to.equal([deck.cards[0].id]);
  })

  // When a guess is made, a new Turn instance is created
  it('should create an instance of Turn when guess is made', () => {
    const round = new Round(deck);
    round.takeTurn("yes");
    expect(round.turns[0]).to.be.an.instanceof(Turn);
  })
  // The turns count is updated, regardless of whether the guess is correct or incorrect

  it('should update turn count for both correct and incorrect', () => {
    const round = new Round(deck);
    round.takeTurn("no");
    round.takeTurn("yes");
    round.takeTurn("no");
    expect(round.turns.length).to.equal(3);
  })

  // The next card becomes current card
  it('should update current card to next card', () => {
    const round = new Round(deck);
    round.takeTurn();
    expect(round.currentCard).to.equal(deck.cards[1]);
  })

  it('calculates precent of correct answers', () => {
    const round = new Round(deck);
    round.takeTurn("no");
    round.takeTurn("yes");
    round.takeTurn("no");
    round.takeTurn("yes");
    expect(round.calculatePercentCorrect()).to.equal(75);
  })

  it('should return a message at the end of the round', () => {
    const round = new Round(deck);
    round.takeTurn("no");
    round.takeTurn("yes");
    round.takeTurn("no");
    round.takeTurn("yes");
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`);
  })

})
