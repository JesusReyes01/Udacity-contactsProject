import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

// this.setState({
//   subject: 'Hello! This is a new subject'
//  })
// this.setState((prevState) => ({
//   count: prevState.count + 1
//  }))


class App extends Component {
  state = {
    contacts: [],
    
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }
  
  removeContact = (contact) => {
    //functional setState
    this.setState((currentState) => ({
        contacts: currentState.contacts.filter(c => {
          return c.id !== contact.id
        })
    }))
    ContactsAPI.remove(contact)
  }

  createContact = (contact) => {
    ContactsAPI.create(contact)
      .then((contact) => {
        this.setState((prevState) => ({
          contacts: prevState.contacts.concat([contact])
        }))
      })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts 
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )}/>
        
        <Route path="/create" render={({ history }) => (
          <CreateContact
            onCreateContact = {(contact)=>{
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>

      </div>
    );
  }
}

export default App;
