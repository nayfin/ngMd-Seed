import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninDialogComponent } from '../../../signin-dialog/containers/signin-dialog/signin-dialog.component';

@Component({
  selector: 'auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent {

  data: any;
  @Input() user: string;

  constructor(
    public dialog: MatDialog,
  ) { }

  openAuthDialog(type: string): void {
    const dialogRef = this.dialog.open(SigninDialogComponent, {
      width: '250px',
      data: { type }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }

}
