import React from 'react'

import Logo from '../logo'
import { Nav, NavLink, NavContainer } from './styles'

const Header = () => {
  const activeStyle = {
    color: "#00c"
  }
  return (
    <Nav>
      {/* <Logo /> */}
      <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
      <NavLink to="/tattoo-categories" activeStyle={activeStyle}>Tattoos</NavLink>
      <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink>
    </Nav>
  )
}

export default Header
