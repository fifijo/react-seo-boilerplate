import React from 'react'
import styled from 'styled-components'
import Navigation from 'shared/components/Navigation'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = () => (
  <HeaderContainer>
    <Navigation />
  </HeaderContainer>
)

Header.displayName = 'Header'

export default Header
