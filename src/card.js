const SPADES = '♠️'
const CLUBS = '♣️'
const HEARTS = '♥️'
const DIAMONDS = '♦️'
const JACK = 'J'
const QUEEN = 'Q'
const KING = 'K'
const ACE = 'A'

const SUITS = [SPADES, CLUBS, HEARTS, DIAMONDS]
const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE]
const VALUES = {
  [JACK]:   10,
  [QUEEN]:  10,
  [KING]:   10,
  [ACE]:  1 || 11
}

class Card{

  constructor(rank, suit) {

      this.suit = suit
      this.rank = rank

  }

   isAce(){
    return this.rank === ACE
  }

  value() {
    let value = ''
    if ( this.rank > 1 && this.rank < 11 ) {
      value = this.rank
      return value

    } else if ( this.rank === ACE ) {
      value = 11
      return value

    } else {
      value  = 10
      return value
    }
  }

  toString(){
    return `${this.rank}${this.suit}`
  }
}

  Card.all = function(){
    const cards = []
    SUITS.forEach(suit =>{
      RANKS.forEach(rank =>{
        cards.push(new Card( rank, suit ))
      })
    })
    return cards
  }




Card.SUITS     = SUITS
Card.RANKS     = RANKS
Card.HEARTS    = HEARTS
Card.DIAMONDS  = DIAMONDS
Card.CLUBS     = CLUBS
Card.SPADES    = SPADES
Card.ACE       = ACE
Card.JACK      = JACK
Card.QUEEN     = QUEEN
Card.KING      = KING


module.exports = { all: Card.all }
