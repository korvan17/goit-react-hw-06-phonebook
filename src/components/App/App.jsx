import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux'; // Импортируйте useSelector и useDispatch
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { MainConteiner } from './App.styled';
import { addContact, setFilter, deleteContact } from '../../store/contactsSlice'; // Импортируйте действия из contactsSlice

export function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  function onFormSubmit(name, number) {
    const existingContact = contacts.list.find(
      (contact) => contact.name === name
    );
    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(3), name, number };
    dispatch(addContact(newContact));
  }

  function onChange({ target: { value } }) {
    dispatch(setFilter(value));
  }

  const filteredContacts = contacts.list.filter((contact) =>
    contact.name.toLowerCase().includes(contacts.filter.toLowerCase())
  );

  function onDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <MainConteiner>
      <h1>Phonebook</h1>
      <ContactForm onSabmit={onFormSubmit} />

      <h2>Contacts</h2>
      <Filter onChange={onChange} />
      <ContactList onDelete={onDelete} contacts={filteredContacts} />
    </MainConteiner>
  );
}
