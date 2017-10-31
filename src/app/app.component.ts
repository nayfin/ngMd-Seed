import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Store } from 'tft-store';
import { User, AuthService } from 'tft-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Seed Title';

  user$: Observable<User>;

  subscriptions: Subscription[];

    constructor(
      private store: Store,
      private authService: AuthService,
      private router: Router
    ) {}

    ngOnInit() {
      this.subscriptions = [
        this.authService.auth$.subscribe(),
      ];
      this.user$ = this.store.select<User>('user');
    }

    ngOnDestroy() {
      this.subscriptions.forEach( (subscription) => {
        subscription.unsubscribe();
      });
    }

    async onLogout() {
      await this.authService.logoutUser();
    }
  // TODO: create user
}
