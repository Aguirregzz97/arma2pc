import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import ScrollToTop from '../utils/scrollToTop'

const ReactRouter: React.FC = ({ children }) => {
  return (
    <Router>
      <ScrollToTop />
      {children}
    </Router>
  )
}

export default ReactRouter
