import { Component } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {
  public name: string;

  constructor() {
    this.name = '';
  }

  showOccupant(nameOccupant: string) {
    this.name = nameOccupant;
  }
}
