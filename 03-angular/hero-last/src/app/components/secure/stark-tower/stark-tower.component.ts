import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stark-tower',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterOutlet
  ],
  templateUrl: './stark-tower.component.html',
  styleUrl: './stark-tower.component.scss'
})
export class StarkTowerComponent implements OnInit {
  public navBarList: { value: string, routerLink: string }[];

  constructor() {
    this.navBarList = [];
  }

  ngOnInit(): void {
    this.navBarList = [
      {
        value: 'Heroes',
        routerLink: './'
      },
      {
        value: 'Team',
        routerLink: './team'
      }
    ];
  }
}
