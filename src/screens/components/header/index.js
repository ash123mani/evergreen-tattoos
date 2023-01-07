import React from 'react'

import Logo from '../logo'
import { Nav, NavLink, NavContainer } from './styles'

const Header = () => {
  return (
    <Nav>
      <Logo />
      <NavLink to="/" isCurrent>Home</NavLink>
      <NavLink to="/tattoo-categories" isCurrent>Tattoos</NavLink>
      <NavLink to="/s" isCurrent>Contact</NavLink>
    </Nav>
  )
}

export default Header
