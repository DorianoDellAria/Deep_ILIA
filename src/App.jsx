import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'

import './App.scss'
import MainPage from './pages/MainPage'
import Projects from './pages/Projects'
import Team from './pages/Team'

function App() {
  return (<>
    <div className='App'>
      <Router>
        <div className="container is-widescreen">
          <NavBar />
          <div className="page-container">
            <Routes>
              <Route path='/' exact element={<MainPage />} />
              <Route path='/projects' exact element={<Projects />} />
              <Route path='/team' exact element={<Team />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  </>
  )
}

export default App
