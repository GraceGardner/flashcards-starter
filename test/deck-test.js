const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');

describe('Deck', () => {
  let cards;

  beforeEach(() => {
    const cardOne = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    const cardTwo = new Card(124, "Is this a question 2?", ["yes", "no"], "yes");
    const cardThree = new Card(125, "Is this not a question 3?", ["yes", "no"], "no");
    const cardFour = new Card(126, "Is this a question 4?", ["yes", "no"], "yes");
    const cardFive = new Card(127, "Is this not a question 5?", ["yes", "no"], "no");
    cards = [cardOne, cardTwo, cardThree, cardFour, cardFive];
  })

  it('should be a function', () => {
    const deck = new Deck(cards);
    expect(Deck).to.be.a('function');
  })

  it('should take a array of cards', () => {
    const deck = new Deck(cards);
    expect(deck.cards[0]).to.be.an.instanceof(Card);
  })

  it('should count cards', () => {
    const deck = new Deck(cards);
    expect(deck.countCards()).to.equal(5);
  })
})
