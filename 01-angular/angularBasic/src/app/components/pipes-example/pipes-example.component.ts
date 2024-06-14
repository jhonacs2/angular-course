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

  constructor() {
    this.lastname = 'Cesar';
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.userProfile));
  }
}
