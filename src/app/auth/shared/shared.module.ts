import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignModule } from '../../modules/design.module';

// components
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthMenuComponent } from './components/auth-menu/auth-menu.component';
// services
import { AuthService } from './services/auth.service';
// guards
import { AuthGuard } from 'tft-auth';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    DesignModule,
  ],
  declarations: [
    AuthFormComponent,
    AuthMenuComponent
  ],
  exports: [
    AuthFormComponent,
    AuthMenuComponent
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
