import React from 'react';
import styled from 'styled-components';
import { zerosRed } from '../Styles/colors';
import { Title } from '../Styles/title';
import { dotw, dailySpecials } from '../Data/FoodData';

const NavbarStyled = styled.div`
  background-color: ${zerosRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 29px;
  color: white;
  text-shadow: 2px 2px 4px #170707;
  text-align: center
 
}
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>
        Deal of the day for {dotw}: {dailySpecials[dotw].name}
      </Logo>
    </NavbarStyled>
  );
}
