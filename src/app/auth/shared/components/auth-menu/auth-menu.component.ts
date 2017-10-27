import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthDialogComponent } from '../../../auth-dialog/containers/auth-dialog/auth-dialog.component';

@Component({
  selector: 'auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent {

  @Input() user: string;

  constructor(
    public dialog: MatDialog,
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

}
