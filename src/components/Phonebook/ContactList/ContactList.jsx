import React from 'react';
import { Button } from '@mui/material';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact, index) => {
        const { id, name, number } = contact;
        const handleDeleteContact = () => {
          onDelete(index);
        };
        return (
          <li key={id}>
            {name} {number}
            <Button type="button" onClick={handleDeleteContact}>
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
