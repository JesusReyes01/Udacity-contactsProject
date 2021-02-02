import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    
    render() {
        const { query } = this.state;
        const {contacts, onDeleteContact} = this.props;

        const showingContacts = query === ""
            ? contacts
            : contacts.filter(c => (c.name.toLowerCase().includes(query.toLowerCase())))

        return (
            <div className='list-contacts'>
                {/* {JSON.stringify(this.state)} */}
                <div className='list-contacts-top'>
                    <input 
                        className='search-contacts'
                        type ='text'
                        placeholder = 'Search Contacts'
                        value = {query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                {/* {query !== '' && ( */}
                {showingContacts.length !== contacts.length && (
                    <div>
                        TEST
                    </div>
                )}

                <ol className="contact-list">
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div
                                className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button 
                                onClick={() => onDeleteContact(contact)}
                                // onClick={this.props.onDeleteContact(contact)}
                                className='contact-remove'>
                                    Remove
                            </button>
                        
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}
//Functional Component
// ListContacts.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// }

export default ListContacts