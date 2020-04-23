import React from 'react';
import Instructions from './instructions.js'



export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.i= 0
    this.array = ['this is how you play', 'we put the cards in the pile', 'and then you deal them', 'and then everyone has cards', 'you play them one at a time', 'then someone wins']
    this.page=this.array[0]
  }

  handleClick = () =>{
    ++this.i;
    this.page = this.array[this.i]
  }

  render(){
    return(
      <div>
      <h1> 56 </h1>
      <Instructions page={this.page}/>
      </div>
    )
  }



}
