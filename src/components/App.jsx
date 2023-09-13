import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
// import Register from './pages/Register';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Login = lazy(() => import('components/pages/Login'));
const Register = lazy(() => import('components/pages/Register'));
// const Contacts = lazy(() => import('components/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <div className="container">
      {/* <Routes>
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Routes> */}
      {isLoading && <Loader />}
      {/* {<Register />} */}
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList></ContactsList>
      </Section>
    </div>
  );
};
