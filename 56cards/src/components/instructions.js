import React from 'react';

import '../assets/instructions.css'
import Button from 'react-bootstrap/button'
export default class Instructions extends React.Component{
      constructor(props){
        super(props)
        this.i= 0
        this.array = ['this is how you play', 'we put the cards in the pile', 'and then you deal them', 'and then everyone has cards', 'you play them one at a time', 'then someone wins']

      }

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

    </p>
    </div> <br/>
    <Button onClick={this.onClick} size='sm' variant='outline-info' as='input' type='button' value="Prev Page"/>
    <Button onClick={this.onClick} size='sm' variant='outline-info' as='input' type='button' value="Next Page"/>
    </div>

  )}


}
