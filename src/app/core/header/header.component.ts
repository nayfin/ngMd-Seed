import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// TODO: You've prepared the header by seperating links into userLinks and authLinks and created a variable loggedIn to track auth status; 



export class HeaderComponent implements OnInit {
  // TODO: make this an input
  title = 'ngMd Seed';

  // TODO: Import appRoutes after seperated into module, or create links service to provide to routes and header

  constructor() { }

  ngOnInit() {
  }
}
