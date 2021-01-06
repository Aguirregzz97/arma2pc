import './Contact.scss'

import * as React from 'react'

import ContactInfo from '../../atoms/ContactInfo/ContactInfo'
import WorldAnimation from '../../atoms/WorldAnimation/WorldAnimation'

const Contact: React.FC = () => {
  return (
    <div className='Contact_container'>
      <ContactInfo />
      <WorldAnimation />
    </div>
  )
}

export default Contact
