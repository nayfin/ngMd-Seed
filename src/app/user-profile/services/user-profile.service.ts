import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { Store } from 'tft-store';
import { User } from 'tft-auth';



@Injectable()
export class UserProfileService {

  user$: Observable<User>;

  constructor(
    private store: Store,

  ) { }

  async updateProfile(displayName: string, photoURL: string) {

    const profile = firebase.auth().currentUser;
    try {
      await profile.updateProfile({ displayName, photoURL });

      // TODO: create a static fromJson method on type User to perform conversion
      const user: User = User.fromJson(profile);
      // {
      //   displayName: profile.displayName,
      //   photoURL: profile.photoURL,
      //   uid: profile.uid,
      //   email: profile.email,
      //   authenticated: true
      // };
      this.store.set('user', user);

    } catch ( err ) {
      console.error(err);
    }
  }

}
