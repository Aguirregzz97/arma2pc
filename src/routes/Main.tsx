import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Home from '../components/templates/Home'

const Main: React.FC = () => {
    return (
        <Switch>
            <Route path='/'>
                <Home />
            </Route>
            <Route path='/:id'>
                <Home />
            </Route>
            <Route path='*'>
                <Redirect to='/home'/>
            </Route>
        </Switch>
    )
}

export default Main
