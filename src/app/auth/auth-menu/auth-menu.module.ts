import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthMenuComponent } from './containers/auth-menu/auth-menu.component';
import { DesignModule } from 'tft-design';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DesignModule,
  ],
  declarations: [
    AuthMenuComponent,
  ],
  exports: [
    AuthMenuComponent
  ]
})
export class AuthMenuModule { }
