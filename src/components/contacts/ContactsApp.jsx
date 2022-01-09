import React from 'react';
import Form from './form/Form';
import Filter from './filter/Filter';
import ContactList from './contactsList/ContactList';

export default function ContactsApp() {

  return (
    <div>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
}