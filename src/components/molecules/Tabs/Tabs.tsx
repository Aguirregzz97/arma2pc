import "./Tabs.scss"

import * as React from "react"
import { useHistory } from "react-router-dom"

import Tab from "../../atoms/Tab/Tab"

export type TabsProps = {
  tabs: string[]
  tabsContents: JSX.Element[]
}

const Tabs: React.FC<TabsProps> = ({ tabs, tabsContents }) => {
  const [activeTab, setActiveTab] = React.useState(0)
  const history = useHistory()
  return (
    <>
      <div className='Header_container'>
        <div className='Navbar_container'>
          <div className='Logo'>Arma2PC.com</div>
          <div className='Tabs'>
            {tabs.map((tab, index) => {
              const status = index === activeTab ? "Tab_active" : "Tab_inactive"
              return (
                <Tab
                  key={`tab-${index}`}
                  text={tab}
                  status={status}
                  onClick={() => {
                    setActiveTab(index)
                    history.push(`/${tab.toLocaleLowerCase()}`)
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
      {tabsContents[activeTab]}
    </>
  )
}

export default Tabs
