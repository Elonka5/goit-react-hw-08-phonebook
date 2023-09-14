import { NavLinkStyled } from '../Header/HeaderStyled';
import { AuthNavStyled } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <li>
        <NavLinkStyled to="/login">LogIn</NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </li>
    </AuthNavStyled>
  );
};

export default AuthNav;
