import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
  @Input() name: string;

  @Output() emitOccupant: EventEmitter<string>;

  constructor(private elementRef: ElementRef) {
    this.name = '';
    this.emitOccupant = new EventEmitter();
  }

  emmitWhoIsInTheHouse(): void {
    this.elementRef.nativeElement.firstElementChild.style.backgroundColor = 'orange';
    timer(2000).subscribe(() => {
      this.emitOccupant.emit(this.name);
      this.elementRef.nativeElement.firstElementChild.style.backgroundColor = 'inherit';
    });
  }
}
