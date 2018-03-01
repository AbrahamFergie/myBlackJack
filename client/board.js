import React, { Component } from 'react'

import Player from './humanPlayer'
import Dealer from './dealer'
import Deck from '../src/deck'
import MatchResult from './match-result'

export default class Board extends Component {
   constructor( props ){
    super( props )
    this.state = {
      deck: new Deck(),
      dealer: {},
      player: {},
      cardsRemaining: [],
      cardsUsed: [],
      roundResult: null,
      phase: 0
    }
  }

  componentDidMount() {
    this.setupPlayers()
    this.setupGame()
  }

  setupGame() {
    setTimeout(this.bet.bind(this), 2000)
  }

  setupPlayers() {
    let { phase } = this.state
    const dealer = {
      name: 'Dealer',
      stay: false,
      bust: false,
      hand: [],
      cardTotal: 0
    }
    const player = {
      name: this.props.playerName,
      bank: 1000,
      bet: 0,
      stay: false,
      bust: false,
      split: false,
      hand: [],
      cardTotal: 0
    }
    phase = 1
    this.setState(Object.assign(this.state, { dealer, player, phase }))
  }

  deal() {
    let { deck, dealer, player, phase } = this.state
    if(phase === 1){
      if(player.bet === 0){ return alert("You Need To Place A Bet!!!") }
      let handTotal = 0
      for(let i = 0;i < 2; i++){
        dealer.hand.push( deck.cards.shift() )
        player.hand.push( deck.cards.shift() )
      }

      for(let i = 0; i < player.hand.length; i++){
        handTotal = handTotal + player.hand[i].rank.value
      }
      player.cardTotal = handTotal
      handTotal = 0
      for(let i = 0; i < dealer.hand.length; i++){
        handTotal = handTotal + dealer.hand[i].rank.value
      }
      dealer.cardTotal = handTotal
      handTotal = 0
      player.bet = parseInt(player.bet)
      phase = 2
      this.setState(Object.assign(this.state, { player, dealer, deck, phase }))
    }
  }

  bet(chipType) {
    let { player, roundResult, phase } = this.state
    if(phase === 1){
      if(roundResult) roundResult = null
      switch(chipType){
        case "white":
        player.bet = player.bet + 1
        player.bank -= 1
        break
        case "red":
        player.bet = player.bet + 5
        player.bank -= 5
        break
        case "green":
        player.bet = player.bet + 25
        player.bank -= 25
        break
        case "blue":
        player.bet = player.bet + 50
        player.bank -= 50
        break
        case "black":
        player.bet = player.bet + 100
        player.bank -= 100
        break
      }
      this.setState(Object.assign(this.state, { player, roundResult, phase }))
    }
  }

  bust(player) {
    if(player.cardTotal > 21) {
      for(var i = 0; i < player.hand.length; i++) {
        if(player.hand[i].rank.name === "A" && player.hand[i].rank.value !== 1) {
          player.hand[i].rank.value = 1
          break
        } else {
          break
        }
        break
      }
    }else {
      return false
    }
    this.setState(Object.assign(this.state, { player }))
    return false
  }
  dealerBust(dealer) {
    if(dealer.cardTotal > 21) {
      for(let i = 0; i < dealer.hand.length; i++) {
        if(dealer.hand[i].rank.name === "A") {
          dealer.hand[i].rank.value = 1
          return false
        } else {
          dealer.stay = true
          return true
        }
      }
    }else {
      return false
    }
    return false
  }

  checkForAce(hand) {
    for (var i = 0; i < hand.length; i++) {
      if(hand[i].rank.name === "A"){
        hand[i].rank.value = 1
        return true
      }
    }
    return false
  }

  getHandValue() {
    let { player } = this.state
    let handVal = 0
    for(let i = 0; i < player.hand.length; i++){
      handVal = handVal + player.hand[i].rank.value
    }
    return handVal
  }

  hit() {
    let { deck, player, dealer, phase } = this.state
    if(phase === 2){
      this.bust(player) ?
      this.gameFlow() : player.hand.push( deck.cards.shift() )

      let handTotal = this.getHandValue()
      player.cardTotal = handTotal
      handTotal = 0
      if(player.cardTotal > 21){
        if(!this.checkForAce(player.hand)){
          this.setState(Object.assign(this.state, { player, dealer, deck }))
          setTimeout(this.settle.bind(this),700)
        }
      }
      player.cardTotal = this.getHandValue()

      this.setState(Object.assign(this.state, { player, dealer, deck }))
    }
  }
  dealerHit() {
    let { dealer, deck } = this.state

    if(this.dealerBust(dealer)){
      this.gameFlow()
    }else{
      dealer.hand.push( deck.cards.shift() )
    }
    let handTotal = 0

    for(let i = 0; i < dealer.hand.length; i++){
      handTotal = handTotal + dealer.hand[i].rank.value
    }
    dealer.cardTotal = handTotal
    handTotal = 0
    this.setState(Object.assign(this.state, { dealer, deck }))
    this.anotherTimeOut()
  }

  stay() {
    let { player, dealer, phase } = this.state

    if(phase === 2){
      player.stay = true
      phase = 3
      this.setState(Object.assign(this.state, { player, dealer, phase }))
      this.anotherTimeOut()
    }
  }
  anotherTimeOut() {
    return setTimeout(this.gameFlow.bind(this), 1000)
    this.clearTimeout(timeout)
  }

  splitInitialize() {
    let { player, deck } = this.state
    //send signal to player to split hand in two
    // if(player.hand[0] === player.hand[1]){}
    player.split = true
    // player.push(player.hand[0])
    this.setState(Object.assign(this.state, { player, deck }))
    //apply current bet to both hands and subtract that same amount from bank
    //deal another card to each hand from deck
    //calculate both hand values
  }

  gameFlow() {
    let { player, dealer } = this.state

    if( player.stay == true && dealer.stay == true ){
      this.setState(Object.assign(this.state, { player, dealer }))
      this.settle()
    }else{
      if( player.stay == true ){
        this.setState(Object.assign(this.state, { player, dealer }))
        this.dealerTurn(dealer)
      }
    }
  }

  dealerTurn(dealer) {

    if(dealer.cardTotal >= 17){
      dealer.stay = true
      this.gameFlow()
    }else{
      this.dealerHit()
    }
  }
  settle() {
    let { dealer, player, roundResult, phase } = this.state

    if(player.cardTotal === dealer.cardTotal){
      roundResult = <MatchResult result='draw' bet={player.bet} />
      player.bank += player.bet
    }else if(21 - player.cardTotal  < 21 - dealer.cardTotal && player.cardTotal < 22 && player.cardTotal > dealer.cardTotal || dealer.cardTotal > 21){
      roundResult = <MatchResult result='winner' bet={player.bet} />
      player.bank = (player.bet * 2) + player.bank
    }else{
      roundResult = <MatchResult result='loser' bet={player.bet} />
    }
    this.setState(Object.assign(this.state, { player, roundResult, phase }))
    this.reset()
  }
  reset() {
    let { player, dealer, deck, roundResult, phase } = this.state

    dealer.hand = []
    dealer.stay = false
    dealer.cardTotal = 0

    player.hand = []
    player.bet = 0
    player.stay = false
    player.cardTotal = 0

    phase = 1

    deck = new Deck()
    this.setState(Object.assign(this.state, {
      player, dealer, deck, roundResult, phase
    }))
    setTimeout(this.bet.bind(this), 2000)
  }

  // <button id="split" onClick={this.splitInitialize.bind(this)}>Split</button>
  render () {
    let { dealer, deck, player, roundResult, phase } = this.state

    let dealerComponent = <Dealer name={dealer.name} handTotal={dealer.cardTotal} dHandArray={dealer.hand} gamePhase={phase} />
    let playerComponent = <Player name={player.name} bet={player.bet} handTotal={player.cardTotal} handArray={player.hand} splitBool={player.split} bank={player.bank} />
    return (
      <div id="foo">
        <div id="dealerSpace">
          <div id="dealer"> { dealerComponent } </div>
        </div>
        <div id="playerSpace">
          <div className="hit-stay-buttons">
            <button id="hit" onClick={this.hit.bind(this)}>Hit</button>
            <button id="stay" onClick={this.stay.bind(this)}>Stay</button>
          </div>
          <div className="chips">
            <button onClick={this.bet.bind(this, "white")} id="whiteChip">1</button>
            <button onClick={this.bet.bind(this, "red")} id="redChip">5</button>
            <button onClick={this.bet.bind(this, "green")} id="greenChip">25</button>
            <button onClick={this.bet.bind(this, "blue")} id="blueChip">50</button>
            <button onClick={this.bet.bind(this, "black")} id="blackChip">100</button>
            <button onClick={this.deal.bind(this)} id="set-button">Set-Bet</button>
          </div>
          { playerComponent }
        </div>
        { roundResult }
      </div>
    )
  }
}
