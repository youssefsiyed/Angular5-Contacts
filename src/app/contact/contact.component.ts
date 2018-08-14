import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactsServices} from "../../services/contacts.services";
import {Router} from "@angular/router";
import {Contact} from "../../models/model.contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

pageContact:any;
motCle : string="";
currentPage : number=0;
size: number=5;
  //pages :Array<number>;
pages:any;

  constructor(public http:Http,public contactservice:ContactsServices,public router:Router) { }

  ngOnInit() {

      }
  ////////////////////////////////////////////////////
    doSearch()
 {
   this.contactservice.getContacts(this.motCle,this.currentPage,this.size)
     .subscribe(data=>{ this.pageContact=data;  this.pages=new Array(data.totalPages)},err=>{console.log('Erreur');})
 }
   oneditContact(id:number){
    this.router.navigate(['edit-contact',id]);
   }

  ondeleteContact(c:Contact){
     let confirm=window.confirm("Vouusetes sur pour la suppression");
     if(confirm==true){
    this.contactservice.deleteContact(c.id).subscribe(data=>{alert('supprimer effectuer'); this.pageContact.content.indexOf(c),1},err=>{console.log('Erreur')})
     }
     }

  chercher()
  {
    this.doSearch();
  }

  gotoPage(i : number)
  {
   this.currentPage=i;
    this.doSearch();
  }
}
