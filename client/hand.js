import React, { Component } from 'react'

export default class Hand extends Component{
  constructor(playerName) {
    super(props)
    this.name = playerName,
    this.bank = Number
  }

  placeBet() {
    //take numeric value
    return "you"
  }

  hitOption() {
    //takes card from deck and gives to player
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

  render () {
    return <div>im a hand</div>
  }
}
