import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info ={ nom:'Jamal', prenom:'Lamari', email:'Jamal@gmail.com',photo:'image1.png',tel:'0689512112',datenaissance:'02-02-2017'};
  constructor() { }

  ngOnInit() {
  }

}
