// import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { fetchContacts } from 'redux/contacts/contactsAPI';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section>
        <Form />
      </Section>
      <Section>
        <Filter />
      </Section>
    </>
  );
};

export default Contacts;
