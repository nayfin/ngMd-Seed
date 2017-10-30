import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { DesignModule } from '../modules/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
