import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedModule } from './shared/shared.module';

// third party modules
import { DesignModule } from './../modules/design.module';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthDialogModule } from './auth-dialog/auth-dialog.module';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyAfKGzC-xdoA363ipOKD69JdA6obGQxVPM',
  authDomain: 'tft-materialseed.firebaseapp.com',
  databaseURL: 'https://tft-materialseed.firebaseio.com',
  projectId: 'tft-materialseed',
  storageBucket: 'tft-materialseed.appspot.com',
  messagingSenderId: '1015795404760'
};

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
