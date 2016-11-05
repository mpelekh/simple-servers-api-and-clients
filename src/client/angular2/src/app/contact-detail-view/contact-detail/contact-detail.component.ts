import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Contact } from '../../shared/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-detail',
    templateUrl: 'contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit, OnChanges {
    @Input() contact: Contact;

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        const contact = changes['contact'].currentValue;

        if (contact) {
            this.contact = Object.assign({}, contact);
        }
    }
}