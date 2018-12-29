import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink)`
  padding: 0 1rem;
  text-decoration: none;
  color: #19233b;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  &.active {
    text-decoration: underline;
  }
`;

const Navigation = () => (
    <Fragment>
        <StyledNavLink exact to='/'>Home</StyledNavLink>
        <StyledNavLink to='/about'>About</StyledNavLink>
        <StyledNavLink to='/contact'>Contact</StyledNavLink>
    </Fragment>
)

Navigation.displayName = 'Navigation'

export default Navigation
