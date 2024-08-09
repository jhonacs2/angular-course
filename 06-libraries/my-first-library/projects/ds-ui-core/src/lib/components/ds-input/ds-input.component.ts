import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ds-input',
  templateUrl: './ds-input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DsInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log('test 123');
  }
}
