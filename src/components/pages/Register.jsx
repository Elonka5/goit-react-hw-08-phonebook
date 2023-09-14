import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    evt.target.reset();
  };
  return (
    <div className="container-form">
      <div className="heading">Register</div>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" name="name" type="text" placeholder="Name" />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
