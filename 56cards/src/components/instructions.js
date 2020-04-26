import React from 'react';

import '../assets/instructions.css'
import Button from 'react-bootstrap/button'
export default class Instructions extends React.Component{
      constructor(props){
        super(props)
        this.i = 1
        this.state = {page:'this is how you play',
        2: 'we put the cards in the pile',
        3: 'and then you deal them',
        4: 'and then everyone has cards',
        5: 'you play them one at a time',
        6: 'then someone wins'}

      }

   onClick =(e)=>{
    if(e.target.value === "Next Page"){
      ++this.i
      this.setState({
        page: this.array[i]
      })
    }

  }

  render(){
    return(
    <div>
    <h3> how to play: </h3> <br/>
    <div className='pcontainer'>
    <p className='paragraphs'>
    {this.state.page}
    </p>
    </div> <br/>
    <Button onClick={this.onClick} size='sm' variant='outline-info' as='input' type='button' value="Prev Page"/>
    <Button onClick={this.onClick} size='sm' variant='outline-info' as='input' type='button' value="Next Page"/>
    </div>

  )}


}
