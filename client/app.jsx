import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Player from './player'
import Dealer from './dealer'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  playerCount() {
    const players = ['player1', 'player2', 'player3', 'player4']
    return players.map((player, index) => <Player key={index} player={player} />)
  }
  render() {
    return <div id="board">
      <div id="dealer"><Dealer /></div>
      <div id="players">{this.playerCount()}</div>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
