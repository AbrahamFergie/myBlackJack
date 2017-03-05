import React, { Component } from 'react'
import dealer from '../src/dealer'
import Hand from './hand'
import Deck from '../src/deck'

export default class Dealer extends Component {
    constructor(props) {
      super(props)
    }

    render () {

      const { name, handTotal, dHandArray } = this.props


      return (
        <div id="hand">
          <span id="dealerName"> {name}{': '}{handTotal} </span><br /><br />
          <Hand dHandArray={dHandArray}/>
        </div>
  )}

}
