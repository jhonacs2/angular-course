import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {
  @Input() name: string;

  @Output() emitOccupant: EventEmitter<string>;

  constructor(private elementRef: ElementRef) {
    this.name = '';
    this.emitOccupant = new EventEmitter();
  }

  emmitWhoIsInTheHouse(nameOccupant: string = ''): void {
    this.elementRef.nativeElement.firstElementChild.style.backgroundColor = 'orange';
    timer(2000).subscribe(() => {
      this.emitOccupant.emit(nameOccupant || this.name);
      this.elementRef.nativeElement.firstElementChild.style.backgroundColor = 'inherit';
    });
  }
}
