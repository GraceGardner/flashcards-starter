const chai = require('chai');
const expect = chai.expect;

// const prototypeData = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/deck');

describe('Deck', () => {
  let cards;

  beforeEach(() => {
    cardOne = new Card(123, "Is this a question?", ["yes", "no"], "yes");
    cardTwo = new Card(124, "Is this a question 2?", ["yes", "no"], "yes");
    cardThree = new Card(125, "Is this not a question 3?", ["yes", "no"], "no");
    cardFour = new Card(126, "Is this a question 4?", ["yes", "no"], "yes");
    cardFive = new Card(127, "Is this not a question 5?", ["yes", "no"], "no");
    cards = [cardOne, cardTwo, cardThree, cardFour, cardFive];
  })

  it('should be a function', () => {
    const deck = new
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
