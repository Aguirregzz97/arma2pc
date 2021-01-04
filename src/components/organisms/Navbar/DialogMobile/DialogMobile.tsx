import * as React from 'react'

import FooterMobile from '../../../molecules/FooterMobile/FooterMobile'
import HeaderMobile from '../../../molecules/HeaderMobile/HeaderMobile'
import TabsMobile from '../../../molecules/TabsMobile/TabsMobile'

type DialogMobileProps = {
  onNavbarMobileClosed: () => void
  setDialogOpen: () => void
  initialTab: number
}

const DialogMobile: React.FC<DialogMobileProps> = ({
  onNavbarMobileClosed,
  setDialogOpen,
}) => {
  return (
    <>
      <HeaderMobile onNavbarMobileClosed={onNavbarMobileClosed} />
      <TabsMobile setDialogOpen={setDialogOpen} />
      <FooterMobile />
    </>
  )
}

export default DialogMobile
