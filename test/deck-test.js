const chai = require('chai');
const expect = chai.expect;

// const prototypeData = require('../src/data');
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
    const deck = new Deck(cards)
    expect(Deck).to.be.a('function');
  })

})















// Your Deck class should be initialized with an array of Card objects and should have an accompanying test file. It should know how many Cards are in the Deck.

// const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
//
// const deck = new Deck([card1, card2, card3]);
//
// deck.countCards(); // => 3
