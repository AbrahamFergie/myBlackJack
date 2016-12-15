import React, { Component } from 'react'
// import Card from '../'


export default class Hand extends Component{
  constructor(props) {
    super(props)
  }
  cardValue(card) {
    console.log("CARD: ",card.rank);
    // let value = ''
    if ( card.rank > 1 && card.rank < 11 ) {
      card.value = card.rank
      return card

    } else if ( card.rank === "A" ) {
      card.value = 11
      return card

    } else {
      card.value  = 10
      return card
    }
  }
  showCardUpNDown() {
    const { dHandArray } = this.props
    let cards
    dHandArray == undefined || dHandArray.length < 1 ?
      cards = [] :
      cards = dHandArray.map((card, key) => {
        const classString = (key == 0) ? "card" : "cardDown"
        return (
        <div>
          <div className={classString} key={key}>
            <div id="cardRank">{ card.rank }</div>
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
        this.cardValue(card)
        console.log("VALUE: ", card.value);
        return (
          <div className="card" key={key}>
              <div id="cardRank">{ card.rank }</div>
              <span id="cardSuit">{ card.suit }</span>
          </div>
        )
      })
    }

    // cards.forEach(card =>{
    //   console.log();
    //   this.cardValue(card)
    //   console.log("value: ",card.value)
    // })
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
