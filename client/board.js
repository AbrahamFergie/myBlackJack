import React, { Component } from 'react'
import Player from './humanPlayer'
// import Hand from './hand'
import Dealer from './dealer'
import deckGenerator from '../src/deck'
import Deck from '../src/deck'


export default class Board extends Component {
   constructor( props ){
    super( props )
    this.state = {
      deck: new Deck(),
      dealer: {},
      player: {},
      cardsRemaining: [],
      cardsUsed: []
    }
    // this.testDeal = this.testDeal.bind( this )
  }

  componentDidMount(){
    //TODO:  Get cards from somewhere and store in a variable called deck
    this.setupGame()
    this.setupPlayers()

  }

  setupGame() {
  //   const deck = [ {suit: 'A', value: 11}, { suit: 'J', value: 10 }  ]
  //
  //   console.log(deck.length)
  //   this.setState({ deck })

  }

  setupPlayers() {
    const dealer = {
      name: 'Dealer',
      hand: []
    }

    const player = {
      name: 'El Dood',
      bank: 100000000,
      hand: []
    }
    this.setState(Object.assign(this.state, { dealer, player }))
  }

  testDeal() {
    // console.log('this.state::', this.state)
    let { deck, dealer, player } = this.state
    for(let i = 0;i < 2; i++){
      dealer.hand.push( deck.cards.shift() )
    }
    for(let i = 0;i < 2; i++){
      player.hand.push( deck.cards.shift() )
    }
    // console.log(dealer)
    // console.log(deck.cards.length)
    this.setState(Object.assign(this.state, { player, dealer, deck }))
  }

  //prompt for userName

  //prompt for wage

  //prompt for # of AI opponents

  //prompt for seat #

  //createDeck

  //Dealer will deal
  // deal() {
  //   Dealer.Hand.push(this.shuffleDeck().slice(0,2))
  //   Player.Hand.forEach(hand => {
  //     hand.push(this.shuffleDeck().slice(0,2))
  //   })
  // }
  //begin turn rotation of players

  //prompt for turn decision
    //until stay or bust

  //game results displayed

      //bets resolved

  //prompt for new game

  // setTimeout()
  render () {
    const { dealer, deck, player } = this.state
    const dealerComponent = <Dealer name={dealer.name} handArray={dealer.hand} />
    const playerComponent = <Player name={player.name} handArray={player.hand} bank={player.bank} />
    return (
      <div id="foo">
        <div id="dealer"> { dealerComponent } </div>
        <div id="playerSpace"> { playerComponent } </div>

        <button onClick={this.testDeal.bind(this)}>Deal</button>
    </div>
  )
  }
}
