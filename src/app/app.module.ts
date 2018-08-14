import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {HttpModule} from "@angular/http";
import {ContactsServices} from "../services/contacts.services";
import {FormsModule} from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes :Routes=[

  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'newcontact',component: NewContactComponent},
  {path:'edit-contact/:id',component: EditContactComponent},
  {path:'nouveau-contact',component: NouveauContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),HttpModule,FormsModule
  ],
  providers: [ContactsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
