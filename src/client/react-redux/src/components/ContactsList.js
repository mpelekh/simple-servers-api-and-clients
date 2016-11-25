import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router'

class ContactsList extends Component {
    
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        isLoaded: PropTypes.bool.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        const { contacts, actions } = this.props;

        return (
            <div>
                <h4>Contacts list</h4>
                <ul>
                    {contacts.map(contact => (
                        <li key={contact._id}>
                            <Link to={'/contacts/' + contact._id}>{contact.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ContactsList;