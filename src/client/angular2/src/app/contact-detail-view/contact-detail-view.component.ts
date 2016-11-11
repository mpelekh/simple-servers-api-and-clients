import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/contact.model';
import { ContactsService } from '../shared/contacts.service';

@Component({
    selector: 'contact-detail-view',
    templateUrl: 'contact-detail-view.component.html'
})
export class ContactDetailViewComponent implements OnInit {
    contact: Contact;

    constructor(
        private contactsService: ContactsService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        this.contactsService
            .getContact(id)
            .subscribe(contact => {
                this.contact = contact;
            });
    }

    navigateToEditor(contact: Contact){
        this.router.navigate(['/contact', contact._id, 'edit']);
    }

    navigateToList() {
        this.router.navigate(['/']);
    }
}