import * as React from 'react'

import NuevoEnfoque from '../../../atoms/NuevoEnfoque/NuevoEnfoque'
import StartAnimation from '../../../atoms/StartAnimation/StartAnimation'

const Home: React.FC = () => {
  return (
    <>
      <StartAnimation />
      <NuevoEnfoque />
    </>
  )
}

export default Home
