import React, { Component } from 'react'
import Prompt from 'react-bootstrap-prompt'

import Player from './humanPlayer'
import Dealer from './dealer'
import Deck from '../src/deck'
// import prompt from '../src/promptBox'

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
  }

  componentDidMount(){
    this.setupGame()
    this.setupPlayers()
  }

  setupGame() {
    setTimeout(this.deal.bind(this), 2000)
  }

  setupPlayers() {
    const playerName = prompt("Please enter your name: ")
    const dealer = {
      name: 'Dealer',
      stay: false,
      bust: false,
      hand: [],
      cardTotal: 0
    }
    const player = {
      name: '',
      bank: 20000,
      bet: 0,
      stay: false,
      bust: false,
      hand: [],
      cardTotal: 0
    }
    this.setState(Object.assign(this.state, { dealer, player }))
  }

  deal() {
    let { deck, dealer, player } = this.state
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
    player.bet = prompt("Your bank is at " + player.bank + " How much you wanna throw down?")
    player.bank = player.bet !== NaN ? player.bank - player.bet : 0
    player.bet = parseInt(player.bet)
    this.setState(Object.assign(this.state, { player, dealer, deck }))
  }
  bust(player) {
    console.log("PLAAAYYEYRERE", player);
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
    this.setState(Object.assign(this.state, { player, dealer, deck }))
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

  checkForAce(hand){
    for (var i = 0; i < hand.length; i++) {
      if(hand[i].rank.name === "A"){
        console.log('in the function');
        hand[i].rank.value = 1
        return true
      }
    }
    return false
  }

  getHandValue(){
    let { player } = this.state
    let handVal = 0
    for(let i = 0; i < player.hand.length; i++){
      handVal = handVal + player.hand[i].rank.value
    }
    return handVal
  }

  hit(){
    let { deck, player, dealer } = this.state

    this.bust(player) ?
    this.gameFlow() : player.hand.push( deck.cards.shift() )

    let handTotal = this.getHandValue()
    player.cardTotal = handTotal
    handTotal = 0
    if(player.cardTotal > 21){
      console.log('got this far')
      if(!this.checkForAce(player.hand)){
        console.log('here')
        this.setState(Object.assign(this.state, { player, dealer, deck }))
        setTimeout(this.settle.bind(this),700)
      }
    }
    player.cardTotal = this.getHandValue( )
    this.setState(Object.assign(this.state, { player, dealer, deck }))
  }
  dealerHit(){
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

  stay(){
    let { player, dealer } = this.state

    player.stay = true

    this.setState(Object.assign(this.state, { player, dealer }))
    this.anotherTimeOut()
  }
  anotherTimeOut(){
    return setTimeout(this.gameFlow.bind(this), 1000)
    this.clearTimeout(timeout)
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
  dealerTurn(dealer){

    if(dealer.cardTotal >= 17){
      dealer.stay = true
      this.gameFlow()
    }else{
      this.dealerHit()
    }
  }
  settle(){
    let { dealer, player } = this.state

    if(player.cardTotal === dealer.cardTotal){
      alert("WELL YOU TIED...KINDA LAME BUT HEY YOUR BET OF " + player.bet + " IS STILL THERE, GIT IT")
      player.bank += player.bet
    }

    if(21 - player.cardTotal  < 21 - dealer.cardTotal && player.cardTotal < 22 && player.cardTotal > dealer.cardTotal || dealer.cardTotal > 21){
      alert("YOU ARE WINNING FOR THE DAYS OF GOOD STUFF...LIFE ENJOYS YOU SO RETURN THE FAVOR!")
      player.bank = (player.bet * 2) + player.bank
    }else{
      alert("VALIANT OR FOOLHARDY...NOT SURE...HOPEFULLY YOU DIDNT LOSE ALL YOUR MONEY...")
    }
    this.reset()
  }
  reset(){
    let { player, dealer, deck } = this.state

    dealer.hand = []
    dealer.stay = false
    dealer.cardTotal = 0

    player.stay = false
    player.hand = []
    player.cardTotal = 0

    deck = new Deck()
    this.setState(Object.assign(this.state, { player, dealer, deck }))
    setTimeout(this.deal.bind(this), 2000)
  }

  render () {
    let { dealer, deck, player } = this.state
    let dealerComponent = <Dealer name={dealer.name} handTotal={dealer.cardTotal} dHandArray={dealer.hand} />
    let playerComponent = <Player name={player.name} bet={player.bet} handTotal={player.cardTotal} handArray={player.hand} bank={player.bank} />
    return (
      <div id="foo">
        <div id="dealerSpace">
          <div id="dealer"> { dealerComponent } </div>
        </div>
        <div id="playerSpace">
          <button id="hit" onClick={this.hit.bind(this)}>Hit</button>
          <button id="stay" onClick={this.stay.bind(this)}>Stay</button>
          <div className="chips">
            <button id="whiteChip">1</button>
            <button id="redChip">5</button>
            <button id="greenChip">25</button>
            <button id="blueChip">50</button>
            <button id="blackChip">100</button>
          </div>
          { playerComponent }
        </div>
      </div>
    )
  }
}
