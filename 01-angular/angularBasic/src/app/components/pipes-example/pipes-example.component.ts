import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {
  public userProfile = {
    firstName: 'cesar',
    lastName: 'el mono',
    age: 12
  };
  public numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public lastname: string;
  public loremIpsum: string;
  public date: Date = new Date();

  constructor() {
    this.lastname = 'Cesar';
    this.loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.userProfile));
  }

  updateTruncadePipe(): void {
    this.loremIpsum = '2 2 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
  }

  updateNumbers(): void {
    this.numbers.push(this.numbers.length + 1);
    console.log(this.numbers);
  }

  mouseEnterInputText() {
  }
}
