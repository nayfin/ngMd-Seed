import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from 'tft-store';
import { User, AuthService } from '../../../auth/shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tft-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  subscriptions: Subscription[];

  constructor(
    private store: Store,
    private authService: AuthService,
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

}
