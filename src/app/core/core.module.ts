// import { InputComponent } from './../lib/forms/input/input.component';
import { DesignModule } from './../modules/design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    // InputComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    DesignModule,
    AuthModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
  ]
})
export class CoreModule { }
