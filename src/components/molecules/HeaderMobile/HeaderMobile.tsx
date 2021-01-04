import './HeaderMobile.scss'

import * as React from 'react'

import IconButton from '../../atoms/IconButton/IconButton'

type HeaderMobileProps = {
  onNavbarMobileClosed: () => void
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({
  onNavbarMobileClosed,
}) => {
  return (
    <div className='HeaderMobile'>
      <p>Arma2PC.com</p>
      <IconButton
        onClick={() => {
          onNavbarMobileClosed()
        }}
        iconColor='black'
        iconType='Icon_close'
        size='md'
      />
    </div>
  )
}

export default HeaderMobile
