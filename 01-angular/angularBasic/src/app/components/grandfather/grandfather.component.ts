import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-grandfather',
  templateUrl: './grandfather.component.html',
  styleUrls: ['./grandfather.component.scss']
})
export class GrandfatherComponent {
  @Output() emitOccupant: EventEmitter<string>;

  constructor(private elementRef: ElementRef) {
    this.emitOccupant = new EventEmitter();
  }

  emmitWhoIsInTheHouse(nameOccupant: string = ''): void {
    this.elementRef.nativeElement.firstElementChild.style.backgroundColor = 'orange';
    timer(2000).subscribe(() => {
      this.emitOccupant.emit(nameOccupant || 'The Grandpa');
      this.elementRef.nativeElement.firstElementChild.style.backgroundColor = 'inherit';
    });
  }
}
