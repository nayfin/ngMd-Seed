import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'tft-auth';

@Component({
  selector: 'tft-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {

  @Input() user: User;

  constructor() { }

}
