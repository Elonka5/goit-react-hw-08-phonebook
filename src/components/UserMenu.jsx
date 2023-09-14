import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="usermenu-container">
      <Link to="/contacts">PhoneBook</Link>
      <p> Welcome {user.name}</p>
      <button className="login-button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
