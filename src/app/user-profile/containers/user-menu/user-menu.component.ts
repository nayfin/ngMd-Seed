import { Component, OnInit, Input } from '@angular/core';
import { AuthService, User } from 'tft-auth';

@Component({
  selector: 'tft-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  @Input() user: User;
  
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logoutUser();
  }
}
