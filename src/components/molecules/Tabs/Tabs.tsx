import './Tabs.scss'

import { Slide } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import { TransitionHandlerProps } from '@material-ui/core/transitions/transition'
import * as React from 'react'
import { useHistory } from 'react-router-dom'

import { getLastURL } from '../../../utils/GetLastUrl'
import { getTabIndex } from '../../../utils/GetTabIndex'
import IconButton from '../../atoms/IconButton/IconButton'
import Tab from '../../atoms/Tab/Tab'
import DialogMobile from '../../organisms/Navbar/DialogMobile/DialogMobile'
import logo from './../../../assets/img/logo3.png'

export type TabsProps = {
  tabs: string[]
}

const Transition = React.forwardRef(function Transition(
  props: TransitionHandlerProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />
})

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const url = window.location.href
  const lastUrl = getLastURL(url)
  const currentTabIndex: number = getTabIndex(lastUrl)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState(currentTabIndex)
  const history = useHistory()
  React.useEffect(() => {
    return history.listen(() => {
      const url = window.location.href
      const lastUrl = getLastURL(url)
      const currentTabIndex: number = getTabIndex(lastUrl)
      setActiveTab(currentTabIndex)
    })
  }, [history])
  return (
    <>
      <div className='Header_container'>
        <div className='Navbar_container'>
          <img
            onClick={() => history.push('/Home')}
            className='Logo'
            src={logo}
          />
          <div className='Tabs'>
            {tabs.map((tab, index) => {
              const status = index === activeTab ? 'Tab_active' : 'Tab_inactive'
              return (
                <Tab
                  key={`tab-${index}`}
                  text={tab}
                  status={status}
                  onClick={() => {
                    history.push(`/${tab}`)
                    setActiveTab(index)
                  }}
                />
              )
            })}
          </div>
          <div className='Menu'>
            <IconButton
              onClick={() => {
                setDialogOpen(true)
              }}
              iconColor='yellow'
              size='lg'
              iconType='Icon_menu'
            />
          </div>
        </div>
      </div>
      <Dialog
        className='.MuiPaper-root'
        fullScreen
        open={dialogOpen}
        TransitionComponent={Transition}
      >
        <DialogMobile
          setDialogOpen={() => setDialogOpen(false)}
          initialTab={activeTab}
          onNavbarMobileClosed={() => setDialogOpen(false)}
        />
      </Dialog>
    </>
  )
}

export default Tabs
