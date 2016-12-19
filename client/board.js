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
      bust: false,
      hand: [],
      cardTotal: 0
    }
    const playerName = prompt("Please enter your name: ")
    const daBank = prompt("How much money do you want: ")
    const player = {
      name: playerName,
      bank: daBank,
      bet: 0,
      stay: false,
      bust: false,
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
    let handTotal = 0

    for(let i = 0; i < player.hand.length; i++){
      handTotal = handTotal + player.hand[i].rank.value
      // console.log("VALUES: ", player.hand[i].rank.value)
    }
    player.cardTotal = handTotal
    // console.log("handValue: ", player.cardTotal)
    handTotal = 0
    for(let i = 0; i < dealer.hand.length; i++){
      handTotal = handTotal + dealer.hand[i].rank.value
      // console.log("dVALUES: ", dealer.hand[i].rank.value)
    }
    dealer.cardTotal = handTotal
    handTotal = 0
    player.bet = prompt("How much you wanna throw down?")
    player.bank = player.bank - player.bet
    player.bet = parseInt(player.bet)
    // console.log("PPAPAPPAPLLELELALELTEYEYAR", player)
    this.setState(Object.assign(this.state, { player, dealer, deck }))
  }
  bust(player) {
    console.log("PLAAAYYEYRERE", player);
    if(player.cardTotal > 21) {
      // console.log(player.cardTotal)
      // console.log("kjdhfsk", player.hand[1].rank.value)

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
      // console.log(dealer.cardTotal)
      // console.log("kjdhfsk", dealer.hand[1].rank.value)
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

  hit(){

    let { deck, player, dealer } = this.state

    this.bust(player) ?
    this.gameFlow() : player.hand.push( deck.cards.shift() )

    let handTotal = 0

    for(let i = 0; i < player.hand.length; i++){
      handTotal = handTotal + player.hand[i].rank.value
      // console.log("VALUES: ", player.hand[i].rank.value)
    }
    player.cardTotal = handTotal
    // console.log("handValue: ", player.cardTotal)
    handTotal = 0
    this.setState(Object.assign(this.state, { player, dealer, deck }))
    if(this.bust(player)){
      player.stay = true
      player.bust = true
      // alert("BUST!!")
      this.gameFlow()
    }
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
      // console.log("VALUES: ", player.hand[i].rank.value)
    }
    dealer.cardTotal = handTotal
    // console.log("handValue: ", player.cardTotal)
    handTotal = 0
    this.setState(Object.assign(this.state, { dealer, deck }))
    this.gameFlow()

  }

  stay(){
    let { player } = this.state

    player ?
    player.stay = true
    // this.setState(Object.assign(this.state.player.stay, { stay : true }))
    : player.stay = player.stay
    // console.log("PLAYER: ",this.state.player);

    this.setState(Object.assign(this.state, { player }))
    // alert("BACK IN THE FLOW1!")
    setTimeout(this.gameFlow().bind(this), 2000)
    this.stopTimeOut()
  }

  gameFlow() {
    // debugger
    let { player, dealer } = this.state

    player.stay == true && dealer.stay == true ?
    this.settle() :
    (player.stay == true ?
    this.dealerTurn(dealer) : null)
    //dealer looks at hand

    // console.log("dealers turn")
    //decides to hit or stay
  }
  dealerTurn(dealer){

    dealer.cardTotal >= 17 ?
      dealer.stay = true :
      this.dealerHit()

    // console.log("state of dealer at his turn", dealer)
    this.gameFlow()

  }
//if cardtotal - 21 < cardtotal -21 and cardtotal is not over 21then win
  settle(){
    debugger
    let { dealer, player } = this.state

    if(player.cardTotal - 21 < dealer.cardTotal - 21 && player.cardTotal < 22){
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
    this.deal()

  }

  render () {

    let { dealer, deck, player } = this.state
    let dealerComponent = <Dealer name={dealer.name} dHandArray={dealer.hand} />
    let playerComponent = <Player name={player.name} handArray={player.hand} bank={player.bank} />
    return (
      <div id="foo">
        <div id="Dealer"> { dealerComponent } </div>
        <div id="playerSpace"> { playerComponent } </div>
        <div id="handValue">{player.name}: {player.cardTotal}</div>
        <div id="dHandValue">dealer:  {dealer.cardTotal}</div>


        <button id="hit" onClick={this.hit.bind(this)}>Hit</button>
        <button id="stay" onClick={this.stay.bind(this)}>Stay</button>
    </div>
  )
  }
}
