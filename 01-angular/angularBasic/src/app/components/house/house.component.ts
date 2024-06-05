import { Component, OnInit } from '@angular/core';
import { WhoIsInTheHouseService } from '../../services/who-is-in-the-house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  public name: string;

  constructor(private _whoIsInTheHouse: WhoIsInTheHouseService) {
    this.name = '';
  }

  ngOnInit(): void {
    this._whoIsInTheHouse.name.subscribe(name => this.name = name);
  }

  showOccupant(nameOccupant: string) {
    this.name = nameOccupant;
  }
}
