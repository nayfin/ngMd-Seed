import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DesignModule } from 'tft-design';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { EditUserProfileComponent } from './containers/edit-user-profile/edit-user-profile.component';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';

export const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
];

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent,
    UserProfileFormComponent
  ],
  exports: [
    UserProfileComponent,
    EditUserProfileComponent,
    UserProfileFormComponent
  ]
})
export class UserProfileModule { }
