import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: #474f5a;
  color: #fff;
  font-size: 18px;
  padding: 24px;
  margin-bottom: 60px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  & nav {
    display: flex;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    display: flex;
    background-color: #19b1bf;
    width: 80px;
    height: 20px;
    padding: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
`;
