import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { User } from 'tft-auth';
import { Store } from 'tft-store';
import { AuthService } from 'tft-auth';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'tft-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscriptions: Subscription[];

  constructor(
    private store: Store,
    private authService: AuthService,
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
    this.subscriptions = [
      this.authService.auth$.subscribe(),
    ];
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    this.subscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  updateProfile(profile: {photoURL: string, displayName: string}) {
    this.userProfileService.updateProfile( profile.displayName, profile.photoURL );
  }

}
