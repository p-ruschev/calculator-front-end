import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isDark!: boolean;
  @Output() onThemeSwitch = new EventEmitter<any>();

  userAccount!: string;

  constructor(public userService: UserService) {
  }

  themeSwitch(): void {
    this.onThemeSwitch.emit(!this.isDark);
  }

}
