import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, AuthService } from './auth/shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from 'store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Seed Title';

  user$: Observable<User>;

  subscription: Subscription;

    constructor(
      private store: Store,
      private authService: AuthService,
      private router: Router
    ) {}

    ngOnInit() {
      this.subscription = this.authService.auth$.subscribe();
      this.user$ = this.store.select<User>('user');
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    async onLogout() {
      await this.authService.logoutUser();
    }
  // TODO: create user
}
