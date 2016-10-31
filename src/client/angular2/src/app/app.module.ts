import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ContactComponent } from './contact/contact.component';

import { ContactService } from './contact/contact.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent, 
    ContactComponent
  ],
  providers: [
    ContactService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }