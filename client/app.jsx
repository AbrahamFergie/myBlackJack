import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Board from './board'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return <div id="board"><Board /></div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
