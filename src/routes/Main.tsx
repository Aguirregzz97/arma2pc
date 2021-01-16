import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import BlackBg from '../components/atoms/BlackBg/BlackBg'
import Contact from '../components/molecules/Contact/Contact'
import About from '../components/organisms/Navbar/About/About'
import FAQ from '../components/organisms/Navbar/FAQ/FAQ'
import Home from '../components/organisms/Navbar/Home/Home'
import Navbar from '../components/organisms/Navbar/Navbar'

const Main: React.FC = () => {
  return (
    <BlackBg>
      <Switch>
        <Route path='/Home'>
          <Navbar>
            <Home />
          </Navbar>
        </Route>
        <Route path='/Arma2PC'>
          <Navbar>
            <div>ArmaTuPC Content</div>
          </Navbar>
        </Route>
        <Route path='/About'>
          <Navbar>
            <About />
          </Navbar>
        </Route>
        <Route path='/Contact'>
          <Navbar>
            <Contact />
          </Navbar>
        </Route>
        <Route path='/Faq'>
          <Navbar>
            <FAQ />
          </Navbar>
        </Route>
        <Route path='*'>
          <Navbar>
            <Redirect to='/Home' />
          </Navbar>
        </Route>
      </Switch>
    </BlackBg>
  )
}

export default Main
