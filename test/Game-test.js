const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');
const Round = require('../src/round');
const Deck = require('../src/deck');
const Game = require('../src/Game')
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should keep track of round', () => {
    expect(game.round).to.deep.equal(undefined)
  })

  it('should have a start method', () =>{
    expect(game.start).to.be.a('function')
  })

  it('should create cards', () =>{
    game.start();
    expect(game.deck.cards[0]).to.be.an.instanceof(Card);
  })

  it('should have a deck', () =>{
    game.start()
    expect(game.deck).to.be.an.instanceof(Deck);
  })

  it('should create a new round', () =>{
    game.start()
    expect(game.round).to.be.an.instanceof(Round);
  })

})
