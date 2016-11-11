import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Contact } from '../../shared/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-detail',
    templateUrl: 'contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit, OnChanges {
    @Input() contact: Contact;
    @Output() edit = new EventEmitter<Contact>();
    @Output() back = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        const contact = changes['contact'].currentValue;

        if (contact) {
            this.contact = Object.assign({}, contact);
        }
    }
}