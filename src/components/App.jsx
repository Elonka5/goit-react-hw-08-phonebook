import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './services/contactsAPI';
import { selectLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import { refreshUser } from 'redux/auth/operations';

const Login = lazy(() => import('../components/pages/Login'));
// const Register = lazy(() => import('../components/pages/Register'));

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
      {isLoading && <Loader />}
      {<Register />}
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
