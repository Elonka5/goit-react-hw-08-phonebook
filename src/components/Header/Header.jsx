import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLogin } from 'redux/selectors';
import { HeaderStyled, NavLinkStyled } from './HeaderStyled';

export const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      <HeaderStyled>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </nav>
        {isLogin ? <UserMenu /> : <AuthNav />}
      </HeaderStyled>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
