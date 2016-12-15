import React, { Component } from 'react'
import Hand from './hand'

export default class Player extends Component {
  constructor(props) {
    super(props)

  }


  render () {
    const { name, handArray, bank } = this.props
    console.log("im the handArray: ",handArray);

    return (<div id="player">
            <span id="playerName">{name}</span><br /><br />
            <Hand handArray={handArray}/><br /><br />
            <div id="bank">Bank: {bank}</div>
          </div>
    )
  }
}
