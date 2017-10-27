import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { DesignModule } from '../../modules/design.module';
import { AuthSharedModule } from '../shared/shared.module';
// components
import { AuthDialogComponent } from './containers/auth-dialog/auth-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    AuthSharedModule,
  ],
  declarations: [
    AuthDialogComponent
  ],
  exports: [
    AuthDialogComponent
  ],
  entryComponents: [
    AuthDialogComponent
  ]
})
export class AuthDialogModule { }
