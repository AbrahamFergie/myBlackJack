import React, { Component } from 'react'
import Hand from './hand'

export default class Dealer extends Component {
    constructor(props) {
      super(props)
      this.hand = <Hand />

    }


    render () {
      const dealer = this.props.dealer
      return <div id={dealer}>
        {"Dealer"}<br /><br /> {"wallet: " + this.bank}<br /><br />
        {"Hand" + this.hand} </div>
    }

}
