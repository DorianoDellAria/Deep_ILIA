import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'

import './App.scss'
import MainPage from './pages/MainPage'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Profile from './pages/Profile'
import Footer from './components/Footer'

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
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </div>
          {/* <Footer /> */}
      </Router>
    </div>
  </>
  )
}

export default App
