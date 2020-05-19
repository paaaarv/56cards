import React from 'react';
import Button from 'react-bootstrap/button'
import Hand from './hand.js'


export default class Deck extends React.Component{


  constructor(props){
    super(props)
    this.deal = this.deal.bind(this)
    this.addCard = this.addCard.bind(this)
    this.state = {
      cards:[{name: "K", value: "hearts"},{name: "K", value: "diamonds"},{name: "K", value: "spades"},
      {name: "K", value: "clubs"}, {name: "J", value: "hearts"},{name: "J", value: "diamonds"},
      {name: "J", value: "spades"},{name: "J", value: "clubs"}]
    }
  }
  addCard = () => {
    debugger

  }
  deal = () => {
    for(let i=0; i<6; i++){
      let number = Math.floor(Math.random() * (this.state.cards.length - 1)) + 1
      console.log(number)
      let hand = <Hand key={i} addCard = {this.addCard}/>
        for(let x=0; x<4;x++){
          debugger
          hand.addCard(this.state.cards[number])

        }


    }
  }

  render(){
    return(
      <div>
      <div className='border' id="deck">
      </div>
      <Button onClick={this.deal} size ='sm' variant = 'outline-success'> New Game </Button>
      </div>
    )
  }

}
