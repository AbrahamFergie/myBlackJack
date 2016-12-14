import hand from './hand'
import deck from './deck'

export default class Dealer {
  constructor(){
    this.hand = new hand()
    this.deck = new deck()
  }

  hitOption() {
    //takes card from deck and gives to player
    return player.push(this.deck.shift())
  }

  
}
