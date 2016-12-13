import React from 'react'
import Card from './card'

let deck = React.createClass({
  constructor () {
    this.cards = []
    this.numberOfDecks = 2
    this.generateCards(this.numberOfDecks)
  }

  const generateDeck () => {
    //52 deck set of standard playing cards and double it
    for(let i = numberOfDecks; i < 0; i--){
      this.cards = this.cards.concat(Card.all())
      this.numberOfCards = this.cards.length
    }
  }

  const checkDeckForCompletion () => {
    //check to make sure we have no reiterations beyond what is regulation
    this.numberOfCards = this.cards.length
  }

  const shuffleDeck () => {
    //take the deck and its going to shuffle
    
  }
})
