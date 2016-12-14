import React, { Component } from 'react'
import _ from 'lodash'
import { all } from './card'

export default class Deck extends Component{
  constructor (props) {
    super(props)
    this.cards = all
    this.numberOfDecks = 2
    this.generateCards(this.numberOfDecks)
    this.shuffleDeck = this.shuffleDeck.bind( this )
  }

  generateCards () {
    //52 deck set of standard playing cards and double it
    for(let i = this.numberOfDecks; i < 0; i--){
      this.cards = this.cards.concat(Card.all())
      this.numberOfCards = this.cards.length
    }
  }

  checkDeckForCompletion () {
    //check to make sure we have no reiterations beyond what is regulation
    this.numberOfCards = this.cards.length
  }


  shuffleDeck () {
    //take the deck and its going to shuffle
    return this.cards = _.shuffle(this.cards)
  }

  createDeck(){
    const deck = shuffleDeck()
    console.log(deck);
    return deck
  }

}
