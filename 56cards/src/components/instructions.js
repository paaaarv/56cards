import React from 'react';

import '../assets/instructions.css'
import Button from 'react-bootstrap/button'
export default class Instructions extends React.Component{


 
   onClick =(e)=>{
    if(e.target.value === "Next Page"){
      console.log('hi')
    }

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
    <Button onClick={this.onClick} size='sm' variant='outline-info' as='input' type='button' value="Prev Page"/>
    <Button onClick={this.onClick} size='sm' variant='outline-info' as='input' type='button' value="Next Page"/>
    </div>

  )}


}
