import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'auth-providers',
  templateUrl: './auth-providers.component.html',
  styleUrls: ['./auth-providers.component.scss']
})
export class AuthProvidersComponent implements OnInit {

  providers = [
    {
      name: 'google',
      iconUrl: '/assets/images/auth-providers/google.png'
    },
    {
      name: 'facebook',
      iconUrl: '/assets/images/auth-providers/facebook.png'
    },
  ];

  @Output()
  success = new EventEmitter();

  @Output()
  error = new EventEmitter();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  async providerLogin(provider: string) {
    try {
      await this.authService.loginWithProvider(provider);
      this.success.emit();
    } catch (err) {
      console.log(err);
      this.error.emit(err.message);
    }
  }
}
