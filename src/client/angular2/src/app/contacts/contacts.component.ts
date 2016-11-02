import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from '../contact/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contacts',
    templateUrl: 'contacts.component.html'
})
export class ContactsComponent implements OnInit {
    public contacts: Contact[];

    constructor(private contactsService: ContactsService) { }

    getContacts(): void {
        this.contactsService
            .getContacts()
            .subscribe((contacts: Contact[]) => {
                this.contacts = contacts;
            });
    }

    ngOnInit(): void {
        this.getContacts();
    }

    removeContact($event: any): void {
        const removedContact: Contact = $event.contact;
        this.contacts = this.contacts.filter(contact => contact._id !== removedContact._id);
    }

    editContact($event: any): void {
        const editedContact: Contact = $event.contact;
        this.contacts = this.contacts.map(contact => {
            if(contact._id === editedContact._id) {
                contact = editedContact;
            }

            return contact;
        });
    }

}