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
    newName: string;

    ngOnInit() {
        this.contact = Object.assign({}, this.contact);
        this.newName = this.contact.name;
    }

    removeContact(contact: Contact, event: any) {
        this.remove.emit({ contact });
    }

    editContact(event: any) {
        this.isEditMode = true;
    }

    applyEdit(newName: string, event: any) {
        this.contact = Object.assign({}, this.contact, {name: this.newName});
        this.isEditMode = false;
        this.edit.emit({ contact: this.contact });
    }

    cancelEdit(event: any){
        this.isEditMode = false;
    }
}

