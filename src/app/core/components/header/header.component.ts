import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() user: string;
  @Input() navLinks: { link: string, title: string }[];

  constructor() { }

  ngOnInit() {
  }
}
