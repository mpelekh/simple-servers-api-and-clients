import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ContactsActions from '../actions/ContactsActions';
import Counter from '../components/Counter';
import Footer from '../components/Footer';

export class ContactsList extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { contacts, actions } = this.props;
    return (
      <div>
        <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsList);

function mapStateToProps(state) {
  const { contacts } = state; 
  
  return {
    contacts: contacts.contacts,
    isLoaded: contacts.isLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContactsActions, dispatch)
  };
}