import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';
import { AppComponent }  from './app.component';
import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';
import { ContactEditViewComponent } from './contact-edit-view/contact-edit-view.component';

import { ContactsListComponent } from './contacts-list-view/contacts-list/contacts-list.component';
import { ContactDetailComponent } from './contact-detail-view/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit-view/contact-edit/contact-edit.component';

import { ContactsService } from './shared/contacts.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [ 
    AppComponent,
    ContactsListViewComponent,
    ContactDetailViewComponent, 
    ContactsListComponent,
    ContactDetailComponent,
    ContactEditViewComponent,
    ContactEditComponent
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }