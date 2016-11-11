import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Contact } from '../../shared/contact.model';

@Component({
    moduleId: module.id,
    selector: 'contact-edit',
    templateUrl: 'contact-edit.component.html'
})
export class ContactEditComponent implements OnInit {
    @Input() contact: Contact;
    @Output() save = new EventEmitter<Contact>();
    
    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        const contact = changes['contact'].currentValue;

        if (contact) {
            this.contact = Object.assign({}, contact);
        }
    }
}