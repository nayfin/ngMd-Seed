import { Store } from 'tft-store';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { tap, switchMap, flatMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, Roles } from '../models/user.model';
import { switchMapTo } from 'rxjs/operators/switchMapTo';
import { Observable } from 'rxjs/Observable';



@Injectable()

export class AuthService {

  auth$ = this.authState.pipe(
    switchMap((state) => {
      if ( !state ) {
        this.store.set('user', null);
        return Observable.of(null);
      }
      return this.db.object(`users/${state.uid}/roles`).valueChanges()
        .map( (roles: Roles) => {
          const user: User = User.fromJson(state, roles);
          this.store.set('user', user);
          return user;
        });
    })
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
