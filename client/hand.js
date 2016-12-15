import React, { Component } from 'react'
// import Card from '../'


export default class Hand extends Component{
  constructor(props) {
    super(props)
  }

  showCards() {
    const { handArray } = this.props
    let cards
    if ( handArray == undefined || handArray.length < 1 ) {
      cards = []
    } else {
      cards = handArray.map( (card, key) => {
        console.log("CARD", card)
        return (
          <div className="card" key={key}>
            <div id="cardRank">{ card.rank }</div>
            <span id="cardSuit">{ card.suit }</span>
          </div>
        )
      })
    }
    console.log(cards)
    return cards
  }


  render () {
    return (
      <div>
        { this.showCards() }
      </div>
  )}
}
