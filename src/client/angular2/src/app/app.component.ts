import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular Start App</h1>
        <router-outlet></router-outlet>    
    `
})

export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit(): void { } 
}