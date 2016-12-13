import React, { Component } from 'react'


export default class Hand extends Component{
  constructor(props) {
    super(props)
    this.name = "playerName"
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
    return <div>im the hand</div>
  }
}
