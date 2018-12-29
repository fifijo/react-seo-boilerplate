import React from 'react'
<<<<<<< HEAD
import styled from 'styled-components'
import Navigation from 'shared/components/Navigation'
=======
import { Link } from 'react-router-dom'
import styled from 'styled-components'
>>>>>>> 5df2276cc3eb921e76753eed74238e145a144c59

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
    <HeaderContainer>
       <Navigation/>
    </HeaderContainer>
)

export default Header
