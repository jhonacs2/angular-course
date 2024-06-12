import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {
  public inputColor: string;

  constructor() {
    this.inputColor = 'red';
  }

  ngOnInit(): void {
  }

  changeInputColor(color: string): void {
    this.inputColor = color;
  }
}
