import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
    <AppContainer>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </AppContainer>
)

export default Header
