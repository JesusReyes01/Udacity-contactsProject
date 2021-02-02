import React, { Component } from 'react';
import ListContacts from './ListContacts';

// this.setState({
//   subject: 'Hello! This is a new subject'
//  })
// this.setState((prevState) => ({
//   count: prevState.count + 1
//  }))


class App extends Component {
  state = {
    contacts: [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "@karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg"
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "@richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "@tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
    ]
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
  }
  //

  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
