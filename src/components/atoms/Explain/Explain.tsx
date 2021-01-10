import './Explain.scss'

import * as React from 'react'

type ExplainProps = {
  title: string
  info: string
}

const Explain: React.FC<ExplainProps> = ({ title, info }) => {
  return (
    <div className='Explain_container'>
      <div style={{ display: 'inline-block' }}>
        <h1>{title}</h1>
      </div>
      <p>{info}</p>
    </div>
  )
}

export default Explain
