import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '@mui/material';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = newContact => {
    const newStateContact = { id: uuidv4(), ...newContact };
    const { contacts } = this.state;

    const existingContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (existingContact) {
      return alert('This contact already exists');
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newStateContact] };
    });
  };

  deleteContactHandler = contactToDelete => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact !== contactToDelete
      );

      return {
        contacts: [...updatedContacts],
      };
    });
  };

  filterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterHandler} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContactHandler}
        />
      </Container>
    );
  }
}
