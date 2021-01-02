import "./StartAnimation.scss"

import * as React from "react"

import pcbuild from "../../../assets/img/pcbuild1.jpg"

const StartAnimation: React.FC = () => {
  return (
    <div>
      <div className='Animation_container'>
        <div className='Text'>
          <h1>La PC que siempre has querido.</h1>
        </div>
      </div>
      <div className='PC_images'>
        <img className='Image' src={pcbuild} alt='1' />
        <img className='Image' src={pcbuild} alt='1' />
        <img className='Image' src={pcbuild} alt='1' />
      </div>
    </div>
  )
}

export default StartAnimation
