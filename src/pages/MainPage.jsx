import React from 'react'
import Button from '../components/Button'
import NavBar from '../components/NavBar'
import logo from '../assets/deep-logo.svg'
import "./MainPage.css"

function MainPage() {
  return (
    <div className='MainPage'>
      <div className="logo">
        <img src={logo} alt="deep-logo" />
      </div>
      <Button onClick={()=>alert('button')} variant="primary"> {/*TODO useCallback*/}
        Sign up &gt;
      </Button>
      <NavBar />

    </div>
  )
}

export default MainPage