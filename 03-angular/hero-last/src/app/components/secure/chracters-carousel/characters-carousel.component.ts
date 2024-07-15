import { Component, input, InputSignal, OnInit, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-characters-carousel',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './characters-carousel.component.html',
  styleUrl: './characters-carousel.component.scss'
})
export class CharactersCarouselComponent implements OnInit {
  numberOfItems: InputSignal<number> = input<number>(0);
  itemSelected: InputSignal<number> = input<number>(0);

  itemSelectedChange = output<number>();


  carouselItems: { value: string, selected: boolean }[];

  private _indexSelected: number;

  constructor() {
    this.carouselItems = [];
    this._indexSelected = 0;
  }

  ngOnInit(): void {
    this.carouselItems = Array.from({ length: this.numberOfItems() }, (_, i) => ({
      value: (i + 1).toString().padStart(2, '0'),
      selected: false
    }));

    if (this.itemSelected() >= 0 && this.itemSelected() < this.carouselItems.length) {
      this._indexSelected = this.itemSelected();
      this.carouselItems[this._indexSelected].selected = true;
    }
  }

  carouselHandler(direction: number): void {
    this.carouselItems[this._indexSelected].selected = false;

    if (direction === 1) {
      this._indexSelected = (this._indexSelected + 1) % this.numberOfItems();
    }

    if (direction === -1) {
      this._indexSelected = (this._indexSelected - 1 + this.numberOfItems()) % this.numberOfItems();
    }

    this.carouselItems[this._indexSelected].selected = true;
    this.itemSelectedChange.emit(this._indexSelected);
  }

  selectCarouselNumber(i: number): void {
    this.carouselItems[this._indexSelected].selected = false;
    this._indexSelected = i;
    this.carouselItems[i].selected = true;
    this.itemSelectedChange.emit(i);
  }
}
