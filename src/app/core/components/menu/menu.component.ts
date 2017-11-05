import { Component, OnInit, Input } from '@angular/core';
import { User } from 'tft-auth';

@Component({
  selector: 'tft-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
