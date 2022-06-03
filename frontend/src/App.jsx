import React, { useMemo, useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import './App.scss'
import Footer from './components/Footer'

import MainPage from './pages/MainPage'
import Projects from './pages/Projects'
import Events from './pages/Events'
import News from './pages/News'
import Team from './pages/Team'
import Profile from './pages/Profile'
import Publications from './pages/Publications'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Applications from './pages/Applications'

import Fire from './applications/Fire'
import Excavator from './applications/Excavator'

import { useQuery } from 'react-query'
import CredentialContext from './CredentialContext'
import * as api from './api'


function App() {
  const [access, setAccess] = useState('')
  const [refresh, setRefresh] = useState('')
  const [isLoged, setIsLoged] = useState(false)
  const [username, setUsername] = useState('')

  const context = useMemo(() => ({
    access: access,
    isLoged: isLoged,
    username: username,
  }), [access, isLoged, username])

  const logout = useCallback(() => {
    setAccess('')
    setRefresh('')
    setIsLoged(false)
    setUsername('')
  }, [setAccess, setRefresh, setIsLoged, setUsername])

  useQuery('refresh', () => api.refreshToken(refresh), {
    onSuccess: (data) => {
      setAccess(data.access)
    },
    enabled: isLoged,
    refetchOnWindowFocus: false,
    refetchInterval: 4 * 60_000
  })

  return (

    <div className='App'>
      <CredentialContext.Provider value={context}>
        <Router>
          <div className="container is-widescreen page">
            <NavBar logout={logout} />
            <div className="page-container">
              <Routes>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/events' exact element={<Events />} />
                <Route path='/news' exact element={<News />} />
                <Route path='/team' exact element={<Team />} />
                <Route path='/profile/:username' element={<Profile />} />
                <Route path='/publications' element={<Publications />} />
                <Route path='/login' element={<Login setAccess={setAccess} setRefresh={setRefresh} setUsername={setUsername} setIsLoged={setIsLoged} />} />
                <Route path='/signup' element={<Signup setAccess={setAccess} setRefresh={setRefresh} setUsername={setUsername} setIsLoged={setIsLoged} />} />
                <Route path='/applications' element={<Applications />} />
                <Route path='/applications/fire' element={<Fire />} />
                <Route path='/applications/excavator' element={<Excavator />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      </CredentialContext.Provider>
    </div>
  )
}

export default App
