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
    <div className="container-form">
      <div className="heading">Sign In</div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="email"
          type="text"
          placeholder="E-mail"
        />
        <input
          className="input"
          name="password"
          type="text"
          placeholder="Password"
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
