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
    // this.dealerTurn()

  }

  setupGame() {
    this.timeOut()
    // this.stopTimeOut()
  }
  timeOut(){
    let deal
    return deal = setTimeout(this.deal.bind(this), 2000)
    this.stopTimeOut()
  }
  stopTimeOut(){
    return clearTimeout(deal)
  }

  setupPlayers() {
    const dealer = {
      name: 'Dealer',
      stay: false,
      hand: [],
      handValue: Number
    }
    const playerName = prompt("Please enter your name: ")
    const daBank = prompt("How much money do you want: ")
    const player = {
      name: playerName,
      bank: daBank,
      stay: false,
      hand: [],
      cardTotal: 0
    }
    this.setState(Object.assign(this.state, { dealer, player }))
  }

  deal() {
    // console.log('this.state::', this.state)
    let { deck, dealer, player } = this.state
    for(let i = 0;i < 2; i++){
      dealer.hand.push( deck.cards.shift() )
      player.hand.push( deck.cards.shift() )
    }

    this.setState(Object.assign(this.state, { player, dealer, deck }))
  }
  hit(){
    let { deck, dealer, player } = this.state

    player ?
    player.hand.push( deck.cards.shift() ) :
    dealer.hand.push( deck.cards.shift() )

    console.log("Hand: ", player.hand)

    let handTotal = 0

    for(let i = 0; i < player.hand.length - 1 ; i++){
      handTotal = handTotal + player.hand[i].value
      console.log("VALUES: ", player.hand[i].value)
    }
    player.cardTotal = handTotal
    console.log("handValue: ", player.cardTotal)
    handTotal = 0
    this.setState(Object.assign(this.state, { player, dealer, deck }))
  }
  stay(){
    let player = this.state.player

    player ?
    player.stay = true
    // this.setState(Object.assign(this.state.player.stay, { stay : true }))
    : player.stay = player.stay
    // console.log("PLAYER: ",this.state.player);

    this.setState({ player })
  }


  //prompt for wage

  //prompt for # of AI opponents

  //prompt for seat #

  //createDeck


  //begin turn rotation of players

  // dealerTurn(){
  //   let dealer = this.state.dealer
  //   dealer.
  //   return
  //
  // }
  //prompt for turn decision
    //until stay or bust

  //game results displayed

      //bets resolved

  //prompt for new game

  // setTimeout()
  render () {

    const { dealer, deck, player } = this.state
    const dealerComponent = <Dealer name={dealer.name} dHandArray={dealer.hand} />
    const playerComponent = <Player name={player.name} handArray={player.hand} bank={player.bank} />
    return (
      <div id="foo">
        <div id="dealer"> { dealerComponent } </div>
        <div id="playerSpace"> { playerComponent } </div>

        <button onClick={this.hit.bind(this)}>Hit</button>
        <button onClick={this.stay.bind(this)}>Stay</button>
    </div>
  )
  }
}
