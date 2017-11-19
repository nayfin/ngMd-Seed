import { Store } from 'tft-store';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { tap, switchMap, flatMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';



@Injectable()

export class AuthService {

  auth$ = this.authState.pipe(
    tap( authState => {
      if ( !authState ) {
        this.store.set('user', null);
        return;
      }
      
      console.log('authState', authState);
      const user: User = User.fromJson(authState);
      this.store.set('user', user);
      console.log('user:', user);
      // return authState
    })
    // map((authState: User) => {
    //   this.db.object(`users/${authState.uid}/roles`)
    // })

  );

  constructor(
    private store: Store,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
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
