import './CirclesAnimation.scss'

import * as React from 'react'

const CirclesAnimation: React.FC = () => {
  return (
    <div className='CirclesAnimation_container'>
      <svg viewBox='0 0 108 108'>
        <circle cx='55' cy='55' r='50' className='dashed' />
      </svg>
    </div>
  )
}

export default CirclesAnimation
