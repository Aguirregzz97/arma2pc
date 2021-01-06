import './Navbar.scss'

import * as React from 'react'

import { TabsObject } from '../../../utils/TabsObject'
import Tabs from '../../molecules/Tabs/Tabs'

const Navbar: React.FC = ({ children }) => {
  return (
    <div className='Navbar_outer_container'>
      <div className='Navbar_inner_container'>
        <Tabs tabs={TabsObject} />
        {children}
      </div>
    </div>
  )
}

export default Navbar
