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
    screen: "list",
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
    //object setState - used when you are updating state based on the current state
    // this.setState({contacts:  
    // })

    //functional setState
    this.setState((currentState) => ({
        contacts: currentState.contacts.filter(c => {
          return c.id !== contact.id
        })
    }))
    ContactsAPI.remove(contact)
  }
  //

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
          onNavigate={()=> {
            this.setState({screen: 'create'})
          }}/>
        )}/>
        
        <Route path="/create" component={CreateContact}/>

      </div>
    );
  }
}

export default App;
