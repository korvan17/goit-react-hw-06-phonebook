import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { useState, useEffect } from 'react';
import { MainConteiner } from './App.styled';

export function App() {

  const [contacts, setContacts ] = useState(JSON.parse(localStorage.getItem('contacts')) ?? [])
  const [filter, setFilter ] = useState('')

  useEffect(() => {
    console.log('contacts - ', contacts)
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  function onFormSubmit(name, number) {
    const existingContact = contacts.find(
      contact => contact.name === name
    );
    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(3), name, number };
    
    setContacts(state => [...state, newContact])
  };

  function onChange({ target: { value } }) {
      setFilter(value);
  }

  const filteredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  function onDelete(id) {
    setContacts(state => state.filter(contact => contact.id !== id));
    setFilter(state => state.filter(contact => contact.id !== id));
  }

    return (
      <MainConteiner>
        <h1>Phonebook</h1>
        <ContactForm onSabmit={onFormSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={onChange} />
        <ContactList
          onDelete={onDelete}
          contacts={filteredContacts}
          filter={filter}
        />
      </MainConteiner>
    );
}
