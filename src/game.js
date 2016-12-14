import deck from './deck'


class Game {
  constructor(){
    this.deck =  new Deck()
    this.players = [
      { name: "dealer", hand: [], stay:false },
      { name: "player", hand: [], stay:false }
    ]
    this.deal()

    this.message = ''
  }

  deal( {
    const { players, deck } = this

    players.forEach(player => {
      player.hands.forEach(hand => {
        hand.push(deck.slice(0,2))
    })

    if(isNatural()){new Message("You win stuff")}

  })

  stay( player ) {
    const { hand } = player
    const dealer = this.players

    player.stay = true
  }

  hit( player ) {
    const { hand } = player

    hand.push( deck.shift() )
  }
  stayOption() {
    //end player turn
  }

  doubleDown() {
    //take a card from the deck, and double bet
  }

  fold() {
    //decrement your bank by bet, and end your turn
  }
}
