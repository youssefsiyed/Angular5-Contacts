import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/model.contact";
import {ContactsServices} from "../../services/contacts.services";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  mode:number=1;
  contact: Contact= new Contact();
  constructor(public contactService:ContactsServices) { }

  ngOnInit() {
  }
  saveContact(){
  this.contactService.saveContact(this.contact).subscribe(data=>{ this.contact=data ; this.mode=2; },err=>{console.log(err);})
  }
}
