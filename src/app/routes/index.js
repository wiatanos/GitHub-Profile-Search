import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { asyncComponent } from 'react-async-component'

const Home = asyncComponent({ resolve: () => { return import('../../resources/scenes/home') } })
const Profile = asyncComponent({ resolve: () => { return import('../../resources/scenes/profile') } })

export default class Routes extends Component {
  render () {
    return (
        <BrowserRouter basename='/'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile/:login' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
  }
}
