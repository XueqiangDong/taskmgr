import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() auth = false;
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<boolean>();
  @Output() logout = new EventEmitter();

  onClick() {
    this.toggle.emit();
  }

  handleLogout() {
    this.logout.emit();
  }

  onChange(checked: boolean) {
    this.toggleTheme.emit(checked);
  }

}
