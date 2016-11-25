import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ContactActions from '../actions/ContactActions';
import ContactItem from '../components/ContactItem';

class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { id } = this.props.params;
        this.props.actions.loadContact(id);
    }

    render() {
        return (
            <div>
                <ContactItem {...this.props} />
            </div>
        );
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);

function mapStateToProps(state) {
  const { contact } = state;

  return {
    contact: contact.contact,
    isLoaded: contact.isLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ContactActions, dispatch)
  };
}