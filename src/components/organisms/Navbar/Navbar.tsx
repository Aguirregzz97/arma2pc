import './Navbar.scss'

import * as React from 'react'

import Tabs from '../../molecules/Tabs/Tabs'

export const TabsObject = ['Home', 'Arma2PC', 'About', 'Faq']

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
