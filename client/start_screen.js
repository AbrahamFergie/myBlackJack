import React, { Component } from 'react'

import Board from './board'

export default class StartScreen extends Component {
  constructor() {
    super()
    this.state = {
      visibility: true,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  handleChange(event){
    this.setState(Object.assign(this.state.value, { value: event.target.value }))
  }
  onClick() {
    let { visibility } = this.state
    visibility = false
    this.setState(Object.assign(this.state, { visibility }))
  }
  render() {
    let { value } = this.state
    return(
      this.state.visibility ? <div className="start-screen">
        <div className="start-screen-banner">Node BlackJack</div>
        <form className="start-screen-form" onSubmit={this.onClick.bind(this)}>
          <input type="text" className="player-name" value={this.state.value} onChange={this.handleChange} placeholder="Name"/>
          <input type="submit" value="START" className="start-button"/>
        </form>

      </div> : <Board playerName={value}/>
    )
  }
}
