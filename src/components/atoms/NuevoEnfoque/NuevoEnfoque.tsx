import './NuevoEnfoque.scss'

import * as React from 'react'
import { useHistory } from 'react-router-dom'

import CirclesAnimation from '../CirclesAnimation/CirclesAnimation'
import Explain from '../Explain/Explain'
import Icon from '../Icon/Icon'

const NuevoEnfoque: React.FC = () => {
  const history = useHistory()
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
        <div
          onClick={() => {
            history.push('/About')
          }}
        >
          Conoce mas
          <span>
            <Icon type='Icon_chevron_right' size='lg' color='white' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default NuevoEnfoque
