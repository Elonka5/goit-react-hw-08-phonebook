import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.target.elements;
    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
    evt.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" />
      <input name="password" type="text" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
