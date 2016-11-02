import { Component, ChangeDetectionStrategy, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from './contact.model';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.styles.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
    @Input() contact: Contact;
    @Output() remove = new EventEmitter();
    @Output() edit = new EventEmitter();
    isEditMode: boolean = false;

    ngOnInit() {
        this.contact = Object.assign({}, this.contact);
    }

    removeContact(contact: Contact, event: any) {
        this.remove.emit({ contact });
    }

    editContact(event: any) {
        this.isEditMode = true;
    }

    applyEdit(editedContact: Contact, event: any) {
        const contact = Object.assign({}, editedContact);
        this.edit.emit({ contact });
    }

    cancelEdit(event: any){
        this.isEditMode = false;
    }
}

