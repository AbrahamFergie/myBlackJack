import React, { Component } from 'react'
import Hand from './hand'

export default class Player extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    const { name, bet, handTotal, handArray, bank } = this.props

    return (
      <div id="player">
        <span id="playerName">{name}{': '}{handTotal}</span>
        <span id="bet">{'Your Bet: '}{bet}</span>
        <Hand handArray={handArray}/><br /><br />
        <div id="bank">Bank: {bank}</div>
      </div>
    )
  }
}
