import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

import { AuthService } from '../services/auth.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AuthDialogComponent } from '../../auth-dialog/containers/auth-dialog/auth-dialog.component';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog,
  ) {}

  canActivate() {
    return this.authService.authState
      .map((user) => {
        if (!user) {
          this.router.navigate(['home']);
          this.openAuthDialog('signin');
        }
        return !!user;
      });
  }

  openAuthDialog(method: string): void {
    const dialogRef: MatDialogRef<AuthDialogComponent> = this.dialog.open(AuthDialogComponent, {
      width: '350px',
      data: { authMethod: method, noAuthMessage: 'You must be logged in to enter that portion of the site'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed and passed this data:', result);
    });
  }
}
