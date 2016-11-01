import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';

import { ContactsService } from './contacts/contacts.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    ContactsComponent, 
    ContactComponent
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }