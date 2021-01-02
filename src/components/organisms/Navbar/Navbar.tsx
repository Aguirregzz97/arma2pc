import "./Navbar.scss"

import * as React from "react"

import StartAnimation from "../../atoms/StartAnimation/StartAnimation"
import Tabs from "../../molecules/Tabs/Tabs"

const Navbar: React.FC = () => {
  return (
    <Tabs
      tabs={["Home", "Arma2PC", "About", "Faq"]}
      tabsContents={[
        <StartAnimation key='' />,
        <>Arma2PC content</>,
        <>About Content</>,
        <>FAQ Content</>,
      ]}
    />
  )
}

export default Navbar
