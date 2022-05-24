import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

import './App.scss'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import MainPage from './pages/MainPage'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Profile from './pages/Profile'
import Publications from './pages/Publications'

function App() {
  return (<>
    <div className='App'>
      <Router>
        <div className="container is-widescreen page">
          <NavBar />
          <div className="page-container">
            <Routes>
              <Route path='/' exact element={<MainPage />} />
              <Route path='/projects' exact element={<Projects />} />
              <Route path='/team' exact element={<Team />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/publications' element={<Publications />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
  </>
  )
}

export default App
