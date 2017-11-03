import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedModule } from './shared/shared.module';

// third party modules
import { DesignModule } from './../modules/design.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthDialogModule } from './auth-dialog/auth-dialog.module';
import { firebaseConfig } from './firebase.conf';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AuthSharedModule.forRoot(),
    AuthDialogModule,
  ],
  declarations: [],
  exports: [
    AuthSharedModule,
  ]
})
export class AuthModule { }
