import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'

import MainPage from './pages/MainPage'

import './App.scss'

function App() {
  return (<>
      <div className='App'>
        <NavBar />
        <Router>
          <Routes>
            <Route path='/' element={<MainPage/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
