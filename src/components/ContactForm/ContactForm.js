import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { nanoid } from "nanoid";
import { Label,Input,Form } from './ContactForm.styled';

export const ContactForm = (props) =>{

  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');
  

const handleChange = event => {
  const { name, value } = event.target;

  switch (name) {
    case 'name':
      setName(value);
      break;

    case 'number':
      setNumber(value);
      break;

    default:
      return;
  }
};


const handleSubmit = evt => {
  evt.preventDefault();
  props.onSubmit({id:nanoid(),name,number});
  reset();
};

const reset = () => {
  setName('');
  setNumber('');
};


  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
         type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          />
      </Label>
      <Label>
        Phone
        <Input
         type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );

}


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
  }