import { Store } from 'tft-store';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/do';

export interface User {
  displayName?: string;
  email?: string;
  uid: string;
  photoURL?: string;
  authenticated?: boolean;
}

@Injectable()

export class AuthService {

  auth$ = this.afAuth.authState
    .do( authState => {
      if ( !authState ) {
        this.store.set('user', null);
        return;
      }

      console.log('authState: ', authState);

      const user: User = {
        displayName: authState.displayName,
        email: authState.email,
        uid: authState.uid,
        photoURL: authState.photoURL,
        authenticated: true
      };
      this.store.set('user', user);
    });

  constructor(
    private store: Store,
    private afAuth: AngularFireAuth
  ) {}

  get authState() {
    return this.afAuth.authState;
  }

  get user() {
    return this.afAuth.auth.currentUser;
  }
  createUser(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    this.auth$.subscribe();
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  loginWithProvider(provider: string) {
    return this.afAuth.auth.signInWithPopup(this.getProviderMethod(provider));
  }

  logoutUser() {
    this.store.set('user', null);
    return this.afAuth.auth.signOut();
  }

  getProviderMethod(provider: string) {
    switch (provider) {
      case 'google':
      return new firebase.auth.GoogleAuthProvider();
      case 'facebook':
      return new firebase.auth.FacebookAuthProvider();
    }
  }

}
