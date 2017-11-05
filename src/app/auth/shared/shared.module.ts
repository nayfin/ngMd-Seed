import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { AuthService } from './services/auth.service';
// guards
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
  ]
})

export class AuthSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthSharedModule,
      providers: [
        AuthService,
        AuthGuard,
      ]
    };
  }
}
