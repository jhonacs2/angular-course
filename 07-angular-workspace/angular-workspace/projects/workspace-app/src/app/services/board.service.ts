import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class BoardService {
  #board: string;

  constructor() {
    this.#board = '';
  }

  get board(): string {
    return this.#board;
  }

  set board(value: string) {
    if (this.#board === '') {
      this.#board = value;
      console.log(this.#board)
    }
  }
}
