import React, { Component, PropTypes } from 'react';

class ContactItem extends Component {
    
    static propTypes = {
        contact: PropTypes.object.isRequired
    }

    render() {
        const { contact } = this.props;

        return (
            <div>
                Contact Detail Info
                <ul>
                    <li>Name: {contact.name}</li>
                    <li>Address: {contact.address}</li>
                    <li>Company: {contact.company}</li>
                    <li>About: {contact.about}</li>
                </ul>
            </div>
        );
    }
}

export default ContactItem;