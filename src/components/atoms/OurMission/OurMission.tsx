import './OurMission.scss'

import * as React from 'react'

import Title from '../Title/Title'

const OurMission: React.FC = () => {
  return (
    <div className='OurMission_container'>
      <Title
        title='Nuestra Misión'
        info='Nuestra misión es que las personas y empresas puedan tener la mejor calidad de computo por el mejor precio posible'
        className='OurMission_title'
      />
    </div>
  )
}

export default OurMission
