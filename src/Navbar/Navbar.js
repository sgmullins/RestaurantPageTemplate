import React from 'react';
import styled from 'styled-components';
import { zerosRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
  background-color: ${zerosRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 2px 2px 4px #170707;
 
}
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Zeros Surf Subs{' '}
        <span role='img' aria-label='surfer'>
          🏄‍♂️
        </span>
      </Logo>
    </NavbarStyled>
  );
}
