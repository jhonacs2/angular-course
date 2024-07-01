import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stark-tower',
  templateUrl: './stark-tower.component.html',
  styleUrls: ['./stark-tower.component.scss']
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
