import React from 'react';
import Instructions from './instructions.js'



export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.i= 0
    this.array = ['this is how you play', 'we put the cards in the pile', 'and then you deal them', 'and then everyone has cards', 'you play them one at a time', 'then someone wins']
    this.state={
      page: this.array[0]
  }
}

  handleClick = (e) =>{
    debugger
    if(e == "Next Page" && this.i < 4 ){
    ++this.i;
    this.setState({page: this.array[this.i],})
  }
    if(e =="Prev Page" && this.i>0) {
      --this.i;
      this.setState({page:this.array[this.i]})
    }
}

  render(){
    return(
      <div>
      <h1> 56 </h1>
      <Instructions page={this.state.page} onClick={this.handleClick}/>
      </div>
    )
  }



}
