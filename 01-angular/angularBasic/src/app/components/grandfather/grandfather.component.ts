import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { WhoIsInTheHouseService } from '../../services/who-is-in-the-house.service';

@Component({
  selector: 'app-grandfather',
  templateUrl: './grandfather.component.html',
  styleUrls: ['./grandfather.component.scss']
})
export class GrandfatherComponent {
  @Output() emitOccupant: EventEmitter<string>;

  constructor(private _whoIsInTheHouse: WhoIsInTheHouseService,
              private elementRef: ElementRef) {
    this.emitOccupant = new EventEmitter();
  }

  emmitWhoIsInTheHouse(nameOccupant: string = ''): void {
    this._whoIsInTheHouse.setName('The Grandpa');
  }
}
