import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {

  authMethod: string;

  get oppositeAuthMethod(): string {
    return this.authMethod === 'signin' ? 'register' : 'signin';
  }

  get submitLabel(): string {
    return this.authMethod === 'signin' ? 'Enter' : 'Create Account';
  }
  get linkLabel(): string {
    return this.authMethod === 'signin' ? 'Not Registered?' : 'Already a member?'
  }

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.authMethod = data.authMethod;
  }

  toggleAuthMethod() {
    this.authMethod = this.oppositeAuthMethod;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
