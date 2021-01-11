import './NuevoEnfoque.scss'

import * as React from 'react'

import CirclesAnimation from '../CirclesAnimation/CirclesAnimation'
import Explain from '../Explain/Explain'

const NuevoEnfoque: React.FC = () => {
  return (
    <div className='NuevoEnfoque_container'>
      <div>
        <CirclesAnimation />
      </div>
      <div>
        <Explain
          title='Nuevo Enfoque'
          info='La tecnología crece muy rapido, arma2pc.com te asegura que recibiras las partes de computo mas nuevas y de mejor calidad
              que haya en el dia que ordenes tu pc, a diferencia de comprar una computadora prearmada con partes viejas.'
        />
      </div>
    </div>
  )
}

export default NuevoEnfoque
