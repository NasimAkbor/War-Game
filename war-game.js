class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.allCards();
    this.distribute();
  }

  suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  allCards() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.cards.push(new Card(this.suits[i], this.ranks[j], this.scores[j]));
      }
    }
  }

  distribute() {
    //First shuffle the deck
    for (let i = this.cards.length - 1; i > 0; i--) {
      let nexRand = Math.floor(Math.random() * i);
      let pHolder = this.cards[i];
      this.cards[i] = this.cards[nexRand];
      this.cards[nexRand] = pHolder;
    }
    playerOneHand.push(this.cards.splice(0, this.cards.length / 2));
    playerTwoHand.push(this.cards.splice(0, this.cards.length));

  }
}

playerOneHand = [];
playerTwoHand = [];

let popo = new Deck;

console.log(popo.cards);
console.log(popo.cards[0]);
console.log(playerOneHand);
console.log(playerTwoHand);
