import React from 'react'
import Button from '../components/Button'
import logo from '../assets/deep-logo.svg'
import "./MainPage.css"

function MainPage() {
  return (
    <div className='MainPage'>
      <div className="logo">
        <img src={logo} alt="deep-logo" />
      </div>
      <Button onClick={()=>alert('button')}>
        Sign up &gt;
      </Button>
    </div>
  )
}

export default MainPage