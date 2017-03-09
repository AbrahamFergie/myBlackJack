import React, { Component } from 'react'

export default class Hand extends Component{
  constructor(props) {
    super(props)
  }

  showCardUpNDown() {
    let { dHandArray } = this.props
    let cards
    dHandArray == undefined || dHandArray.length < 1 ?
      cards = [] :
      cards = dHandArray.map((card, key) => {
        return (
          <div>
            <div className="card" key={key}>
              <div id="cardRank">{ card.rank.name }</div>
              <span id="cardSuit">{ card.suit }</span>
            </div>
          </div>
        )
      })
    return cards
  }

  showCards() {
    const { handArray } = this.props
    let cards
    if ( handArray == undefined || handArray.length < 1 ) {
      cards = []
    } else {
      cards = handArray.map( (card, key) => {
        return (
          <div className="card" key={key}>
            <div id="cardRank">{ card.rank.name }</div>
            <span id="cardSuit">{ card.suit }</span>
          </div>
        )
      })
    }
    return cards
  }
  render () {
    return (
    <div>
      <div>
        { this.showCardUpNDown() }
      </div>
      <div>
        { this.showCards() }
      </div>
    </div>
  )}
}
