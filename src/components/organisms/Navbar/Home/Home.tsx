import * as React from 'react'

import NuevoEnfoque from '../../../atoms/NuevoEnfoque/NuevoEnfoque'
import StartAnimation from '../../../atoms/StartAnimation/StartAnimation'
import Table from '../../../atoms/Table/Table'

const Home: React.FC = () => {
  return (
    <>
      <StartAnimation />
      <NuevoEnfoque />
      <Table />
    </>
  )
}

export default Home
