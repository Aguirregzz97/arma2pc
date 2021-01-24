import './Customizabilidad.scss'

import * as React from 'react'

import Title from '../Title/Title'

const Customizabilidad: React.FC = () => {
  return (
    <div className='Customizabilidad_container'>
      <Title
        title='Customizablidad'
        info='¿Quieres mas almacenmaiento, menos memoria, o algo que se adapte a tus necesidades? contactanos! nostros te cotizamos la opcion que mas te guste'
        className='Customizabilidad_title'
      />
    </div>
  )
}

export default Customizabilidad
