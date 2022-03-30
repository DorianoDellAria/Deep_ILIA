import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'

import './App.scss'
import MainPage from './pages/MainPage'
import Project from './pages/Projects'

function App() {
  return (<>
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      </Router>
    </div>
  </>
  )
}

export default App
