import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    @Input() contacts: Array<any>;
    @Output() add = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }
}

