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
            .subscribe((res: Contact[]) => {
                this.contacts = res;
            });
    }

    ngOnInit(): void {
        this.getContacts();
    }

    removeContact($event: any): void {
        const contact: Contact = $event.contact;
        console.log(contact);
    }

    editContact($event: any): void {
        console.log('--- all contacts', this.contacts);
        console.log('--- $event', $event);
    }

}