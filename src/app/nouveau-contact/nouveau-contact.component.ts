import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {ContactsServices} from "../../services/contacts.services";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public http:Http,public contactservice:ContactsServices) { }

  ngOnInit() {
  }
  onsavecontact(dataForm){
    this.contactservice.saveContact(dataForm).subscribe(data=>{console.log('OK')},err=>{console.log('Erreur Ajoue')});
  }
}
