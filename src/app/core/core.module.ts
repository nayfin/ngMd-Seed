import { InputComponent } from './../lib/forms/input/input.component';
import { DesignModule } from './../modules/design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    InputComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    DesignModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
  ]
})
export class CoreModule { }
