import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import BlackBg from '../components/atoms/BlackBg/BlackBg'
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
            <div>About Content</div>
          </Navbar>
        </Route>
        <Route path='/Faq'>
          <Navbar>
            <div>FAQ Content</div>
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
