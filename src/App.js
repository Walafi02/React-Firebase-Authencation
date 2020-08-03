import React from 'react'

import { useSelector } from 'react-redux'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import {
  Content,
  Main,
  SignIn,
  SignUp
} from './components'

export default function App() {
  const { authReducer: user, firebaseReducer } = useSelector(state => state)

  const { isEmpty } = firebaseReducer.auth

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Firebase Authencation</Link>
          <div className="collapse navbar-collapse" id="navbarSuportContent">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/signin" className="nav-link">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">SignUp</Link>
              </li>
              {!isEmpty && (
                <li>
                  <Link to="/content" className="nav-link">Content</Link>
                </li>
              )}
            </ul>
          </div>
          {user.user}
        </nav>

        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/content" component={Content} />
        </Switch>
      </div>
    </Router>
  )
}
