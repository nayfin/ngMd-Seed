import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './forms/form/form.component';
import { InputComponent } from './forms/input/input.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { UploadService } from './uploads/upload.service';
import { DesignModule } from '../modules/design.module';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
  ],
  declarations: [
    FormComponent,
    InputComponent,
    UploadFormComponent
  ],
  exports: [
    FormComponent,
    InputComponent,
    UploadFormComponent
  ]
})

export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [
        UploadService
      ]
    };
  }
}
