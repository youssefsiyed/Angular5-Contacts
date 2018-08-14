import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/model.contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsServices} from "../../services/contacts.services";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  model:number=1;
  idContact:number;
  contact : Contact=new Contact();
  constructor(public activatedRoute:ActivatedRoute ,public contactservice:ContactsServices,public router:Router) {
    this.idContact=this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactservice.getContact(this.idContact).subscribe(data=>{this.contact=data;},err=>{console.log("ERREUR");})
  }

  updateContact(){
    this.contactservice.updateContact(this.contact).subscribe(data=>{alert("mise a jour effectuer");this.router.navigate(['contact']);},err=>{console.log("error");})
  }
}
