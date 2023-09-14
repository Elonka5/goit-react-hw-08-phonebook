import {
  ContactListStyled,
  Buttons,
  ContactStyled,
} from './ContactsListstyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsAPI';
import { selectContacts, selectFilter } from 'redux/selectors';
import { AiFillDelete } from 'react-icons/ai';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  const handleDeleteContact = idContact => {
    dispatch(deleteContact(idContact));
  };

  const getfilteredContacts = filteredContacts();

  return (
    <ContactListStyled>
      {getfilteredContacts.map(({ id, name, number }) => (
        <ContactStyled key={id}>
          {name}: {number}
          <Buttons type="button" onClick={() => handleDeleteContact(id)}>
            Delete
            <AiFillDelete size="14" />
          </Buttons>
        </ContactStyled>
      ))}
    </ContactListStyled>
  );
};
