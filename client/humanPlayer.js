import React, { Component } from 'react'
import Hand from './hand'

export default class Player extends Component {
  constructor(props) {
    super(props)

  }
  render () {
    const { name, handTotal, handArray, bank } = this.props

    return (
      <div id="player">
        <span id="playerName">{name}{': '}{handTotal}</span><br /><br />
        {/* <span id="handValue">{handTotal}</span> */}
        <Hand handArray={handArray}/><br /><br />
        <div id="bank">Bank: {bank}</div>
      </div>
    )
  }
}
