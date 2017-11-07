import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DesignModule } from 'tft-design';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { EditUserProfileComponent } from './containers/edit-user-profile/edit-user-profile.component';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';
import { UserMenuComponent } from './containers/user-menu/user-menu.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserProfileService } from './services/user-profile.service';

export const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'edit', component: EditUserProfileComponent },
];

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent,
    UserProfileFormComponent,
    UserMenuComponent,
    UserCardComponent
  ],
  exports: [
    UserProfileComponent,
    EditUserProfileComponent,
    UserProfileFormComponent,
    UserMenuComponent
  ],
  providers: [
    UserProfileService,
  ]
})
export class UserProfileModule { }
