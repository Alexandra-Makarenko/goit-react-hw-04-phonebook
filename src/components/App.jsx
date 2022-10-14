import useLocalStorage from '../hooks/useLocalStorage';
import { useState, useEffect } from 'react';import {ContactForm} from './ContactForm/ContactForm'
import {Filter} from './Filter/Filter'
import {ContactList} from './ContactList/ContactList'



export const  App=()=>{
  const [contacts, setContacts] =  useLocalStorage('contacts');
  const [filter, setFilter] = useState('');
  
useEffect(() =>{
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);
  if (parsedContacts) {
    setContacts(parsedContacts);
  }
},[setContacts])

useEffect(() =>{
  localStorage.setItem('contacts', JSON.stringify(contacts))
},[contacts])


  const formSubmitHandler = data => {  
    console.log(data)
    contacts.map(contact=> contact.name.toLowerCase()).includes(data.name.toLowerCase())? (alert(`${data.name} is already in contacts`)) : (setContacts([...contacts, ...[data]])  )
  }


 
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const  visibleFilter = () => {
     const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const deleteContact = todoId => {
    setContacts(contacts.filter(contact => contact.id !== todoId));
  };


 
    const visibleContacts = visibleFilter();
    return (
   <div>
  <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />

  <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
       <ContactList contacts={visibleContacts} filter={filter}  onDeleteContact={deleteContact} />
</div>
  );
  
};


