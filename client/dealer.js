import React, { Component } from 'react'
import dealer from '../src/dealer'
import Hand from './hand'
import Deck from '../src/deck'

export default class Dealer extends Component {
    constructor(props) {
      super(props)
    }

    render () {
      console.log('DEALER', this.props)

      const { name, handArray } = this.props


      return (
        <div id="hand">
          <span id="dealerName"> {name} </span>
          <Hand handArray={handArray}/>
        </div>
  )}

}
