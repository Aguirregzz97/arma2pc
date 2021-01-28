import './ContactInfo.scss'

import * as React from 'react'

type ContactMediaProps = {
  name: string
  value: string
}

const ContactMedia: React.FC<ContactMediaProps> = ({ name, value }) => {
  return (
    <div className='ContactMedia_container'>
      <p>{name}</p>
      <p>{value}</p>
    </div>
  )
}

const ContactInfo: React.FC = () => {
  return (
    <div className='ContactInfo_container'>
      <div style={{ display: 'inline-block' }}>
        <h1>Contacto</h1>
      </div>
      <p>
        El entusiasmo y dedicacion de los trabajadores de arma2PC.com son la
        clave para la mejor posible PC que puedes armar en el momento
      </p>
      <ContactMedia
        name='E-mail - telefono'
        value='contacto@arma2pc.com 811022325'
      />
    </div>
  )
}

export default ContactInfo
