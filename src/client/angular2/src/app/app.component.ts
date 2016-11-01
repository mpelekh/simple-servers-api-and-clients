import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular Start App</h1>
        <contacts></contacts>    
    `
})

export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit(): void { } 
}