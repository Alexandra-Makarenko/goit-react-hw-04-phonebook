
import { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm'
import {Filter} from './Filter/Filter'
import {ContactList} from './ContactList/ContactList'



export class App extends Component  {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
}
componentDidMount() {
  // console.log('App componentDidMount');

  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if (parsedContacts) {
    this.setState({ contacts: parsedContacts });
  }
}
componentDidUpdate(prevProps, prevState) {

  const nextContacts = this.state.contacts;
  const prevContacts = prevState.contacts;

  if (nextContacts !== prevContacts) {
    localStorage.setItem('contacts', JSON.stringify(nextContacts));
  }

}

  formSubmitHandler = data => {  
    this.state.contacts.map(contact=> contact.name.toLowerCase()).includes(data.name.toLowerCase())? (alert(`${data.name} is already in contacts`)) : (this.setState((prevState) => { return { contacts: [...prevState.contacts, ...[data]] } }))
  }


 
   changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
   visibleFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
    deleteContact = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }));
  };


  render() {
    const { filter } = this.state;
    const visibleContacts = this.visibleFilter();
    return (
   <div>
  <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler } />

  <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
       <ContactList contacts={visibleContacts} filter={filter}  onDeleteContact={this.deleteContact} />
</div>
  );
  }
};
