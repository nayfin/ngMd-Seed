import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthDialogComponent } from '../../../auth-dialog/containers/auth-dialog/auth-dialog.component';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthMenuComponent {

  @Input() user: User;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  openAuthDialog(method: string): void {
    const dialogRef: MatDialogRef<AuthDialogComponent> = this.dialog.open(AuthDialogComponent, {
      width: '350px',
      data: { authMethod: method }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed and passed this data:', result);
    });
  }

  logOut() {
    this.authService.logoutUser().then( (value) => {
      setTimeout(() => {
        console.log('logged out:', value, 'this.user:', this.user);
      }, 500);
    } );
  }

}
