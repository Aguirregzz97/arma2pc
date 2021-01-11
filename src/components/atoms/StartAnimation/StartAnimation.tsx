import './StartAnimation.scss'

import * as React from 'react'

import pcbuild1 from '../../../assets/img/home-pc-1.png'
import pcbuild2 from '../../../assets/img/home-pc-2.png'
import pcbuild3 from '../../../assets/img/home-pc-3.png'

const StartAnimation: React.FC = () => {
  return (
    <div>
      <div className='Animation_container'>
        <div className='Text'>
          <h1>La PC que siempre has querido.</h1>
        </div>
      </div>
      <div className='PC_images'>
        <img className='Image' src={pcbuild1} alt='1' />
        <img className='Image' src={pcbuild3} alt='1' />
        <img className='Image' src={pcbuild2} alt='1' />
      </div>
    </div>
  )
}

export default StartAnimation
