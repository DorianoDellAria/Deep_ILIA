import React, { useContext } from 'react'
import logo from '../assets/deep-logo.svg'
import { Link } from 'react-router-dom'
import CredentialContext from '../CredentialContext'

import { UimAngleRightB as Angle } from './icons'
import './NavBar.scss'

function NavBar({ logout }) {

  const { isLoged, username } = useContext(CredentialContext)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={logo} width="289" height="91" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {isLoged ?
              <>
                <div className='username'>
                  {username}
                </div>
                <button className="button is-primary" onClick={logout} >
                  Disconnect
                </button>

              </>
              :
              <>
                <Link className="button is-secondary" to="/login">
                  Log in
                </Link>
                <Link className="button is-primary" to="/signup">
                  Sign up <Angle />
                </Link>
              </>
            }
          </div>
        </div>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/team">
            Team
          </Link>
          <Link className="navbar-item" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item" to="/publications">
            Publications
          </Link>
          <Link className="navbar-item" to="#">
            Applications &amp; Demos
          </Link>
          <Link className="navbar-item" to="#">
            Events
          </Link>
          <Link className="navbar-item" to="#">
            News
          </Link>
          <span className="navbar-item">

          </span>

        </div>


      </div>
    </nav>
  )
}

export default NavBar