import React from 'react'
import logo from '../assets/deep-logo.svg'
import { Link } from 'react-router-dom'

import { UimAngleRightB as Angle } from './angle'

function NavBar() {
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
            <a className="button is-secondary">
              Log in
            </a>
            <a className="button is-primary">
              Sign up <Angle />
            </a>
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
          <Link className="navbar-item" to="#">
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