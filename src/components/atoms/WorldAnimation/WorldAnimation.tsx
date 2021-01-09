import './WorldAnimation.scss'

import * as React from 'react'

import neuronsImage from './../../../assets/img/neurons.png'
import worldImage from './../../../assets/img/world.png'

const WorldAnimation: React.FC = () => {
  return (
    <div className='WorldAnimation_container'>
      <img src={neuronsImage} alt='neurons' />
      <img src={worldImage} alt='world' />
      <div className='Dot_world' />
      <span className='WorldAnimation_city'>Monterrey <div className="WorldAnimation_arrow_down"></div></span>
    </div>
  )
}

export default WorldAnimation
