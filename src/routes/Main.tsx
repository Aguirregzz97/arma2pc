import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import BlackBg from '../components/atoms/BlackBg/BlackBg'
import Contact from '../components/molecules/Contact/Contact'
import About from '../components/organisms/Navbar/About/About'
import ArmaTuPc from '../components/organisms/Navbar/ArmaTuPc/ArmaTuPc'
import FAQ from '../components/organisms/Navbar/FAQ/FAQ'
import Home from '../components/organisms/Navbar/Home/Home'
import Navbar from '../components/organisms/Navbar/Navbar'

const Main: React.FC = () => {
  return (
    <BlackBg>
      <Switch>
        <Route path='/home'>
          <Navbar>
            <Home />
          </Navbar>
        </Route>
        <Route path='/arma2PC'>
          <Navbar>
            <ArmaTuPc />
          </Navbar>
        </Route>
        <Route path='/about'>
          <Navbar>
            <About />
          </Navbar>
        </Route>
        <Route path='/contact'>
          <Navbar>
            <Contact />
          </Navbar>
        </Route>
        <Route path='/faq'>
          <Navbar>
            <FAQ />
          </Navbar>
        </Route>
        <Route path='*'>
          <Navbar>
            <Redirect to='/home' />
          </Navbar>
        </Route>
      </Switch>
    </BlackBg>
  )
}

export default Main
