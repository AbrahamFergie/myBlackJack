import React, { Component } from 'react'
import Hand from './hand'
import Deck from './deck'

export default class Dealer extends Component {
    constructor(props) {
      super(props)
    }


    render () {
      const dealer = this.props.dealer
      return <div id={dealer}>
        {"Dealer"}<br /><br /> {"wallet: " + this.bank}<br /><br />
        "Hand: "<Hand /> <Deck /> </div>
    }

}
