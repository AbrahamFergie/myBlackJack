import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return <div>This is an easy react app.</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
