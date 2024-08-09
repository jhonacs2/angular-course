import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-library';
  lorem: string;

  constructor() {
    this.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo in';
  }
}
