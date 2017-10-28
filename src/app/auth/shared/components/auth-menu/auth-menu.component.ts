import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthDialogComponent } from '../../../auth-dialog/containers/auth-dialog/auth-dialog.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthMenuComponent {

  @Input() user: string;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  openAuthDialog(method: string): void {
    const dialogRef: MatDialogRef<AuthDialogComponent> = this.dialog.open(AuthDialogComponent, {
      width: '250px',
      data: { authMethod: method }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed and passed this data:', result);
    });
  }

  logOut() {
    this.authService.logoutUser();
    console.log("logged out:", this.user);
    
  }

}
