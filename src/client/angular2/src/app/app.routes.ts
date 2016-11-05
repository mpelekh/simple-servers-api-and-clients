import { ContactsListViewComponent } from './contacts-list-view/contacts-list-view.component';
import { ContactDetailViewComponent } from './contact-detail-view/contact-detail-view.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', component: ContactsListViewComponent },
  { path: 'contact/:id', component: ContactDetailViewComponent }
];