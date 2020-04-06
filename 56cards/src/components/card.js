import React from 'react';
import '../assets/card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default class Card extends React.Component{


  render(){
    return(
      <div className='border'>
      <p className='top-left'>k</p>
      <div className="icon">
      <FontAwesomeIcon icon={faHeart} size="lg" className="icon"/>
      </div>
      <p className='bottom-right'>k</p>
      </div>
    )
  }





}
