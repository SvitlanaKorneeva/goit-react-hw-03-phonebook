import React, { Component } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import { v4 as genId } from "uuid";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
       this.setState({ contacts: parsedContacts })
    }
    // console.log(parsedContacts)
    }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state)
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле contacts, записываю contacts в хранилище')
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  addContact = ({ name, number }) => {
    const newContact = { id: genId, name, number }
    const contacts = this.state.contacts
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase()))
    { return (alert(`${name} is already in contacts`)) }
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }))
    
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value })
    
  }
  
  getVisibleContacts = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((elem) =>
    elem.name.toLowerCase().includes(normalizedFilter))

  }

  deleteContact = contactId  => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(({ id }) => id !==contactId )
  }))
  
  }
  
  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();
   
      return (
        <div>
          <h1 className="title">Phonebook</h1>
          <ContactForm onAddContact={this.addContact} contacts={visibleContacts} />
          <h2 className="title">Contacts</h2>
          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
        </div>
    );
  }
}

  
export default App;
