import React, { Component } from 'react'

import Board from './board'

export default class StartScreen extends Component {
  constructor() {
    super()
    this.state = {
      visibility: true
    }
  }
  onClick() {
    let { visibility } = this.state
    visibility = false
    this.setState(Object.assign(this.state, { visibility }))
  }
  render() {
    return(
      this.state.visibility ? <div>
        <div className="start-screen">Node BlackJack</div>
        <button className="start-button" onClick={this.onClick.bind(this)}>START</button>
      </div> : <Board />
    )
  }
}
