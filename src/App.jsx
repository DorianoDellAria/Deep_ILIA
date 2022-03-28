import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'

import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact render={props => <MainPage {...props} />} />

        </Switch>
      </Router>
    </div>
  )
}

export default App
