import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninDialogComponent } from './containers/signin-dialog/signin-dialog.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SigninDialogComponent
  ],
  exports: [
    SigninDialogComponent
  ],
  entryComponents: [
    SigninDialogComponent
  ]
})
export class SigninDialogModule { }
