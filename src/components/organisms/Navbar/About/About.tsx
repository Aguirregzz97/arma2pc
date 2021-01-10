import './About.scss'

import * as React from 'react'

import BridgingGap from '../../../atoms/BridgingGap/BridgingGap'
import OurMission from '../../../atoms/OurMission/OurMission'

const About: React.FC = () => {
  return (
    <div>
      <OurMission />
      <BridgingGap />
    </div>
  )
}

export default About
