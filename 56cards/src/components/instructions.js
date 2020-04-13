import React from 'react';

import '../assets/instructions.css'
import Button from 'react-bootstrap/button'
export default class Instructions extends React.Component{


  render(){

    const array = ['this is how you play', 'we put the cards in the pile', 'and then you deal them', 'and then everyone has cards', 'you play them one at a time', 'then someone wins']
  return(
    <div>
    <h3> how to play: </h3>
    <div className='pcontainer'>
    <p className='paragraphs'>

    </p>
    </div>
    <Button size='sm' variant='outline-info' as='input' type='button' value="Prev Page"/>
    <Button size='sm' variant='outline-info' as='input' type='button' value="Next Page"/>
    </div>

  )}


}
