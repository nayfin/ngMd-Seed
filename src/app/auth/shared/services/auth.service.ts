import { Store } from 'tft-store';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface User {
  uid: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  authenticated?: boolean;
}

@Injectable()

export class AuthService {

  auth$ = this.authState.pipe(
    tap( authState => {
      if ( !authState ) {
        this.store.set('user', null);
        return;
      }

      const user: User = {
        displayName: authState.displayName,
        email: authState.email,
        uid: authState.uid,
        photoURL: authState.photoURL,
        authenticated: true
      };
      this.store.set('user', user);
    })

  );

  constructor(
    private store: Store,
    private afAuth: AngularFireAuth,
    private router: Router,
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
    this.router.navigate(['home']);
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
