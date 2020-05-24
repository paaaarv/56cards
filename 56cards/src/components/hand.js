import React from 'react';



export default class Hand extends React.Component{

  constructor(props){
    super(props)
    this.state={
      hand:[]
    }
    this.handleChange= this.addCard.bind(this)
  }


  handleChange(){
    
  }
  componentDidUpdate(){
    this.props.addCard(this.state)
  }

  render(){
    return(
      <div/>
    )
  }

}
