import { DesignModule } from './../modules/design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from '../auth/auth.module';
import { MenuComponent } from './components/menu/menu.component';
import { UserProfileModule } from '../user-profile/index';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    DesignModule,
    AuthModule,
    UserProfileModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
  ]
})
export class CoreModule { }
