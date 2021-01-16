import './FAQ.scss'

import * as React from 'react'

import Questions from '../../../molecules/Questions/Questions'

const FAQ: React.FC = () => {
  return (
    <div className='FAQ_container'>
      <div className='FAQ_title'>
        <div style={{ display: 'inline-block' }}>
          <h1>Preguntas Frecuentes</h1>
        </div>
      </div>
      <Questions />
    </div>
  )
}

export default FAQ
