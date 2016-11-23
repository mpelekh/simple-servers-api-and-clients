import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ContactsActions from '../actions/ContactsActions';
import ContactsList from '../components/ContactsList';

export class Contacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.actions.loadAllContacts();
  }

  render() {
    return <ContactsList {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

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