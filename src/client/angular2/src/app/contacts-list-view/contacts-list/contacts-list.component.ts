import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Contact } from '../../shared/contact.model';

@Component({
    selector: 'contacts-list',
    templateUrl: 'contacts-list.component.html'
})
export class ContactsListComponent implements OnInit, OnChanges {
    @Input() contacts: Contact[];

    constructor() { }

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges){
        const contacts = changes['contacts'].currentValue;
        
        if(contacts) {
            this.contacts = [...contacts];
        }
    }
}