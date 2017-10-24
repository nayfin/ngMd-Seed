import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthMenuComponent } from './shared/components/auth-menu/auth-menu.component';
import { SharedModule } from './shared/shared.module';

// third party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  declarations: [AuthMenuComponent]
})
export class AuthModule { }
