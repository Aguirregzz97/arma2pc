import './BridgingGap.scss'

import * as React from 'react'

import Explain from '../Explain/Explain'
import Icon from '../Icon/Icon'
import neuronsImage from './../../../assets/img/neurons.png'

const BridgingGap: React.FC = () => {
  return (
    <div className='BridgingGap_container'>
      <Explain
        title='Cerrando la brecha'
        info='Nosotros compramos las partes de computo directamente con los mejores proveedores. Esto
        no solo hace que las partes sean de la mejor calidad, tambien hace que los clientes puedan escoger las partes que en verdad quieren'
      />
      <div>
        <Icon
          className='BridgingGap_client'
          type='Icon_client'
          size='lg'
          color='white'
        />
        <span className='BridgingGap_path' />
        <span className='BridgingGap_city'>
          Cliente <div className='BridgingGap_arrow_down'></div>
        </span>
        <span className='BridgingGap_providerI'>
          Proveedor <div className='BridgingGap_arrow_down'></div>
        </span>
        <Icon
          className='BridgingGap_provider'
          type='Icon_provider'
          size='xlg'
          color='white'
        />
        <img src={neuronsImage} />
      </div>
    </div>
  )
}

export default BridgingGap
