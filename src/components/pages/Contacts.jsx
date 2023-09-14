import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';

const Contacts = () => {
  return (
    <>
      <Section>
        <Form />
      </Section>
      <Section>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default Contacts;
