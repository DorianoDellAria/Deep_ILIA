import React from 'react'


function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      {/* <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> */}

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>
          <a className="navbar-item">
            Team
          </a>
          <a className="navbar-item">
            Projects
          </a>
          <a className="navbar-item">
            Publications
          </a>
          <a className="navbar-item">
            Applications
          </a>
          <a className="navbar-item">
            Demos
          </a>
          <a className="navbar-item">
            Events
          </a>
          <a className="navbar-item">
            News
          </a>
          <a className="navbar-item">
            
          </a>

        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                Sign up
              </a>
              <a className="button is-secondary">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar