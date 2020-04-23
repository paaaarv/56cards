import React from 'react';

import '../assets/instructions.css'
import Button from 'react-bootstrap/button'
export default class Instructions extends React.Component{


  clickValue = (e) =>{
    this.props.onClick(e.target.value)
  }




  render(){
    return(
    <div>
    <h3> how to play: </h3> <br/>
    <div className='pcontainer'>
    <p className='paragraphs'>
        {this.props.page}
    </p>
    </div> <br/>
    <Button onClick={this.clickValue} size='sm' variant='outline-info' as='input' type='button' value="Prev Page"/>
    <Button onClick={this.clickValue} size='sm' variant='outline-info' as='input' type='button' value="Next Page"/>
    </div>

  )}


}
