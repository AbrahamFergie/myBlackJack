import React, { Component } from 'react'
import Player from './humanPlayer'
// import Hand from './hand'
import Dealer from './dealer'
import deckGenerator from '../src/deck'


export default class Board extends Component {
  constructor( props ){
    super( props )
    this.state = {
      deck: [],
      dealer: {},
      player: {},
      cardsRemaining: [],
      cardsUsed: []
    }
    this.testDeal = this.testDeal.bind( this )
  }

  componentDidMount(){
    //TODO:  Get cards from somewhere and store in a variable called deck
    this.setupGame()
    this.setupPlayers()

  }

  setupGame() {
    const deck = [ {suit: 'A', value: 11}, { suit: 'J', value: 10 }  ]

    console.log(deck.length)
    this.setState({ deck })
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
    this.setState({ dealer, player })
  }

  testDeal() {
    let { deck, dealer } = this.state
    dealer.hand.push( deck.shift() )

    console.log(dealer)
    console.log(deck.length)
    this.setState({ dealer, deck })
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

  render () {
    const { dealer, deck, player } = this.state
    const dealerComponent = <Dealer name={dealer.name} handArray={dealer.hand} />
    const playerComponent = <Player name={player.name} handArray={player.hand} bank={player.bank} />
    return (
      <div id="foo">
        <div id="dealer"> { dealerComponent } </div>
        <div id="player"> { playerComponent } </div>

        <button onClick={this.testDeal}>Deal</button>
    </div>
  )
  }
}
