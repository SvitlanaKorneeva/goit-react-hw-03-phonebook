import React from 'react';
import s from "./ContactList.module.css";

const ContactList = ({contacts, onDeleteContact }) => (
    <div>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className ={s.ContactList_item}>
                  <p className={s.ContactList_text}>{name} : {number} </p>
                  <button type="button"
                      onClick={() => onDeleteContact(id)}>
                      Delete</button>
            </li>
          ))}
        </ul>
</div>
    
    
)

export default ContactList; 