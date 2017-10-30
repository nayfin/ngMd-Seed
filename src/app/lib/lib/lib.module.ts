import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../forms/form/form.component';
import { InputComponent } from '../forms/input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormComponent,
    InputComponent
  ]
})
export class LibModule { }
