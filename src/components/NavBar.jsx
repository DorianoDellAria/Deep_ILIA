import React from 'react'

function NavBarButton({ onClick, children }) {


  return <button onClick={onClick}>
    {children}
  </button> // TODO useCallback
}

function NavBar() {
  return (
    <NavBarButton>
      test
    </NavBarButton>
  )
}

export default NavBar