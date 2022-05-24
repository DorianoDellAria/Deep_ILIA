import React, { useMemo, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.scss'
import MainPage from './pages/MainPage'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import Login from './pages/Login'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
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
            <NavBar />
            <div className="page-container">
              <Routes>
                <Route path='/' exact element={<MainPage />} />
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/team' exact element={<Team />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login setAccess={setAccess} setRefresh={setRefresh} setUsername={setUsername} setIsLoged={setIsLoged} />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </CredentialContext.Provider>
    </div>
  )
}

export default App
