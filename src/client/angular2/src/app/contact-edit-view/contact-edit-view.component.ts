import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/contact.model';
import { ContactsService } from '../shared/contacts.service';

@Component({
    selector: 'contact-edit-view',
    templateUrl: 'contact-edit-view.component.html'
})
export class ContactEditViewComponent implements OnInit {
    contact: Contact = <Contact>{};

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

    saveAndNavigateToDetail(contact: Contact){
        debugger;
        this.contactsService
            .updateContact(contact)
            .subscribe(contact => {
                this.contact = contact;
            });

        this.router.navigate(['/contact', this.contact._id]);
    }
}