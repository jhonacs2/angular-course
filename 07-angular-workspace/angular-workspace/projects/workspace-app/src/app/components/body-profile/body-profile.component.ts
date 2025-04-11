import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ad-body-profile',
  templateUrl: './body-profile.component.html',
  styleUrls: ['./body-profile.component.scss'],
  host: {
    style: 'display: block;',
    class: 'mt-4 bg-red-100 p-2'
  }
})
export class BodyProfileComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
