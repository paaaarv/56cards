import React from 'react';
import Button from 'react-bootstrap/button'
import Hand from './hand.js'


export default class Deck extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      cards:[{name: "K", value: "hearts"},{name: "K", value: "diamonds"},{name: "K", value: "spades"},
      {name: "K", value: "clubs"}, {name: "J", value: "hearts"},{name: "J", value: "diamonds"},
      {name: "J", value: "spades"},{name: "J", value: "clubs"}]
    }
    this.deal = this.deal.bind(this)

  }

  componentDidUpdate(){
    console.log('hi')
  }
  addCard(){
    this.setState = {
      hello:'hi'
    }
    debugger

  }
  deal = () => {
    let counter = 0
    let hand = <Hand key={counter} onChange = {this.addCard}/>
    for(let i=0; i<6; i++){
      let number = [Math.floor(Math.random() * (this.state.cards.length - 1)) + 1]
      let card = this.state.cards.splice(number)
      console.log(card)
      console.log(this.state.cards)
      let hand = <Hand key={i} addCard = {this.addCard}/>
        for(let x=0; x<4;x++){
          debugger
          hand.props.addCard(this.state.cards[card])

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
