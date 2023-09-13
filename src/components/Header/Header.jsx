import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <header>
        <p> Welcome {user.name}</p>
        <button onClick={() => dispatch(logOut())}>LogOut</button>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
    </>
  );
};
