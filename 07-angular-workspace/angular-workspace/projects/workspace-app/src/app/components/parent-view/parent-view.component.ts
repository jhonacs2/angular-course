import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ad-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParentViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
