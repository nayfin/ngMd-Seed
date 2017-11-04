import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth.service';
import { AuthFormComponent } from '../../../shared/components/auth-form/auth-form.component';

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {

  authMethod: string;
  error: string;

  @ViewChild(AuthFormComponent) authFormComponent: AuthFormComponent;

  get oppositeAuthMethod(): string {
    return this.authMethod === 'signin' ? 'register' : 'signin';
  }

  get submitLabel(): string {
    return this.authMethod === 'signin' ? 'Enter' : 'Create Account';
  }

  get linkLabel(): string {
    return this.authMethod === 'signin' ? 'Not Registered?' : 'Already a member?';
  }

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.authMethod = data.authMethod;
    this.error = data.noAuthMessage;
  }

  toggleAuthMethod() {
    this.authMethod = this.oppositeAuthMethod;
  }

  onNoClick(): void {
    this.closeDialog();
  }

  onSubmit(form: FormGroup) {
    const { email, password } = form.value;

    switch (this.authMethod) {
      case 'signin':
        this.login(email, password);
        break;
      case 'register':
        this.register(email, password);
        break;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async login(email: string, password: string) {
    try {
      await this.authService.loginUser(email, password);
      this.closeDialog();
      // this.router.navigate(['/']);
    } catch (err) {
      console.log(err);
      this.error = err.message;
    }
  }

  async register(email: string, password: string) {
    try {
      await this.authService.createUser(email, password);
      this.closeDialog();
      // this.router.navigate(['/']);
    } catch (err) {
      console.log(err);
      this.error = err.message;
    }
  }

}
