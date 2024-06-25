import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-characters-carousel',
  templateUrl: './characters-carousel.component.html',
  styleUrls: ['./characters-carousel.component.scss']
})
export class CharactersCarouselComponent implements OnInit {
  @Input() numberOfItems: number;
  @Input() itemSelected: number;

  @Output() itemSelectedChange: EventEmitter<number> = new EventEmitter<number>();

  carouselItems: { value: string, selected: boolean }[];

  private _indexSelected: number;

  constructor() {
    this.carouselItems = [];
    this.itemSelected = 0;
    this.numberOfItems = 0;
    this._indexSelected = 0;
  }

  ngOnInit(): void {
    this.carouselItems = Array.from({ length: this.numberOfItems }, (_, i) => ({
      value: (i + 1).toString().padStart(2, '0'),
      selected: false
    }));

    if (this.itemSelected >= 0 && this.itemSelected < this.carouselItems.length) {
      this._indexSelected = this.itemSelected;
      this.carouselItems[this._indexSelected].selected = true;
    }
  }

  carouselHandler(direction: number): void {
    this.carouselItems[this._indexSelected].selected = false;

    if (direction === 1) {
      this._indexSelected = (this._indexSelected + 1) % this.numberOfItems;
    }

    if (direction === -1) {
      this._indexSelected = (this._indexSelected - 1 + this.numberOfItems) % this.numberOfItems;
    }

    this.carouselItems[this._indexSelected].selected = true;
    this.itemSelectedChange.next(this._indexSelected);
  }
}
