import React from 'react';





export default class Deck extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      'K': ['hearts', 'diamonds', 'clubs', 'spades'],
      'Q': ['hearts', 'diamonds', 'clubs', 'spades'],
      'J': ['hearts', 'diamonds', 'clubs', 'spades'],
      '10': ['hearts', 'diamonds', 'clubs', 'spades'],
      '9':['hearts', 'diamonds', 'clubs', 'spades'],
      '8':['hearts', 'diamonds', 'clubs', 'spades'],
      '7':['hearts', 'diamonds', 'clubs', 'spades']
    }

  }


  render(){
    return(
      <div className='border' id="deck">
      </div>
    )
  }

}
