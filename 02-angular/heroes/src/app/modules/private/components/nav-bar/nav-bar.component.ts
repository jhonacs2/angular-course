import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() public navBarList: { value: string, routerLink: string }[];

  constructor() {
    this.navBarList = [];
  }
}
