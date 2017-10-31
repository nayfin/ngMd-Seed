import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignModule } from '../modules/design.module';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { EditUserProfileComponent } from './containers/edit-user-profile/edit-user-profile.component';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';

@NgModule({
  imports: [
    CommonModule,
    DesignModule,
  ],
  declarations: [UserProfileComponent, EditUserProfileComponent, UserProfileFormComponent]
})
export class UserProfileModule { }
