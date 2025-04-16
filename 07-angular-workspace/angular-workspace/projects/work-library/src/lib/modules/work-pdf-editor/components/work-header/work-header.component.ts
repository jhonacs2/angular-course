import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-work-header',
  templateUrl: './work-header.component.html',
  styleUrls: ['./work-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
