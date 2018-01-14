import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// modules
import { DesignModule } from 'tft-library';
import { AuthSharedModule } from '../shared/shared.module';
// components
import { AuthDialogComponent } from './containers/auth-dialog/auth-dialog.component';
import { AuthProvidersComponent } from './containers/auth-providers/auth-providers.component';
import { AuthProviderComponent } from './components/auth-provider/auth-provider.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignModule,
    AuthSharedModule,
  ],
  declarations: [
    AuthDialogComponent,
    AuthProvidersComponent,
    AuthProviderComponent,
    AuthFormComponent,
  ],
  exports: [
    AuthDialogComponent,
    AuthProvidersComponent,
    AuthProviderComponent
  ],
  entryComponents: [
    AuthDialogComponent
  ]
})
export class AuthDialogModule { }
