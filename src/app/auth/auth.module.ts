import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third party modules
import { DesignModule } from './../modules/design.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { firebaseConfig } from './firebase.conf';
import { AuthDialogModule } from './auth-dialog/auth-dialog.module';
import { AuthSharedModule } from './shared/shared.module';
import { AuthMenuModule } from './auth-menu/auth-menu.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AuthSharedModule.forRoot(),
    AuthDialogModule,
    AuthMenuModule,
  ],
  declarations: [],
  exports: [
    // AuthSharedModule,
    AuthMenuModule
  ]
})
export class AuthModule { }
