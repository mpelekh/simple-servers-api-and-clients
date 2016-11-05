import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { Contact } from '../shared/contact.model';

@Component({
    selector: 'contacts-list-view',
    templateUrl: 'contacts-list-view.component.html'
})
export class ContactsListViewComponent implements OnInit {
    public contacts: Contact[];

    constructor(private contactsService: ContactsService) { }

    ngOnInit(): void {
        this.getContacts();
    }

    getContacts(): void {
        this.contactsService
            .getContacts()
            .subscribe((contacts: Contact[]) => {
                this.contacts = contacts;
            });
    }
}