import './ArmaTuPc.scss'

import * as React from 'react'

import Customizabilidad from '../../../atoms/Customizabilidad/Customizabilidad'
import Options from '../../../atoms/Options/Options'
import SeleccionaTuPc from '../../../atoms/SeleccionaTuPc/SeleccionaTuPc'

const ArmaTuPc: React.FC = () => {
  return (
    <div className='ArmaTuPc_container'>
      <SeleccionaTuPc />
      <Options />
      <Customizabilidad />
    </div>
  )
}

export default ArmaTuPc
