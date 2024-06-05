import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { WhoIsInTheHouseService } from '../../services/who-is-in-the-house.service';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
  @Input() name: string;

  @Output() emitOccupant: EventEmitter<string>;

  constructor(private _whoIsInTheHouse: WhoIsInTheHouseService,
              private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    this.name = '';
    this.emitOccupant = new EventEmitter();
  }

  emmitWhoIsInTheHouse(): void {
    this._whoIsInTheHouse.setName(this.name);
    console.log(this._elementRef.nativeElement.firstElementChild)
    this._renderer.setStyle(this._elementRef.nativeElement.firstElementChild,'background','orange')
    // timer(2000).subscribe(() => {
    //   this.emitOccupant.emit(this.name);
    //   this._elementRef.nativeElement.firstElementChild.style.backgroundColor = 'inherit';
    // });
  }
}
