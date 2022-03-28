import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import MainPage from './pages/MainPage'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
