import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'tft-auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tft-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent implements OnInit {

  @Input() user: User;

  @Output() updated = new EventEmitter();

  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.profileForm = this.fb.group({
      displayName: [this.user.displayName, [Validators.required]],
      photoURL: [this.user.photoURL, [Validators.required]],
    });

  }

  onSubmit() {
    if ( this.profileForm.valid ) {
      this.updated.emit(this.profileForm.value);
    }
  }
}
