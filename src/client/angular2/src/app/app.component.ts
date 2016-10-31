import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact/contact.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular Start App</h1>
        <contact></contact>    
    `,
    styles: ['h1 { color: red }']
})

export class AppComponent implements OnInit {
    constructor(private contactService: ContactService) {}

    getContacts(): void {
        this.contactService
            .getContacts()
            .subscribe(res => {
                console.log(res);
            })
    }

    ngOnInit(): void {
        this.getContacts();
    }
 }