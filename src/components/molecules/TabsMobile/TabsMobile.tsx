import './TabsMobile.scss'

import * as React from 'react'
import { NavLink } from 'react-router-dom'

import { getLastURL } from '../../../utils/GetLastUrl'
import { getTabIndex } from '../../../utils/GetTabIndex'
import { TabsObject } from '../../organisms/Navbar/Navbar'

type TabsMobileProps = {
  setDialogOpen: () => void
}

const TabsMobile: React.FC<TabsMobileProps> = ({ setDialogOpen }) => {
  const url = window.location.href
  const currentTabIndex: number = getTabIndex(getLastURL(url))
  const [activeTab, setActiveTab] = React.useState(currentTabIndex)
  return (
    <div className='TabsMobile_container'>
      {TabsObject.map((tab, index) => {
        const status = index === activeTab ? 'MobileTab_active' : ''
        return (
          <div key={tab} className='TabMobile'>
            <NavLink
              className={status}
              onClick={() => {
                setActiveTab(index)
                setDialogOpen()
              }}
              to={`${tab}`}
            >
              00{index}. {tab}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default TabsMobile
