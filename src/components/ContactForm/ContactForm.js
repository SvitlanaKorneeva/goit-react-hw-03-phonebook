import React, { Component } from "react";
import s from "./ContactForm.module.css";
import { v4 as genId } from "uuid";

class ContactForm extends Component {
  state = {
    // contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ],
    name: '',
    number: '',
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });

  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)

    // const { name, number } = this.state;
    // const newContact = {genId, name, number}
    // this.setState(prevState => ({
    //   contacts: [newContact, ...prevState.contacts]
    // }))

    // this.setState({ name: '', number: '' });
    
    const { name, number } = this.state;
    this.props.onAddContact({name, number})
    this.setState({ name: '', number: '' });
    
    // // this.props.onAddContact(this.state.number)
    // this.props.onAddContact({ ...this.state });
    // this.setState({ name: "", number: "" });

  }
//   handleNameChange = event => {
//     // console.log(event.currentTarget.value)
//     this.setState({name: event.currentTarget.value})
//   }
  
//   handleNumberChange = event => {
//     // console.log(event.currentTarget.value)
//     this.setState({number: event.currentTarget.value})
// }
  render() {
    return (
      <>
      {/* <h2>PhoneBook</h2> */}

      <div className={s.wrapper}>
         <form className={s.contactsForm} onSubmit ={this.handleSubmit}>
              <label htmlFor="">
                Name
                <input
                  onChange ={this.handleChange}
                  type="text"
                  placeholder="name"
                  name="name"
                  value = {this.state.name}
                />
            </label>
            
            <label htmlFor="">
                Number
                <input
                  onChange ={this.handleChange}
                  type="text"
                  placeholder="number"
                name="number"
                value = {this.state.number}
                />
              </label>
        <button type="submit" className={s.btn} >Add contact</button>
            </form>
        </div>
        {/* <h2 className={s.title}>Contacts</h2> */}
        {/* <ul>
          {contacts.map(({ genId, name, number }) => (
            <li key={genId}>
              <p>{name} : {number} </p>
            </li>
          ))}
        </ul> */}
</>
    )
  }

}
export default ContactForm;