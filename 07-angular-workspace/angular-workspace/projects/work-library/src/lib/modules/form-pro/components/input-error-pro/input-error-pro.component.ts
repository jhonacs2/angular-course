import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-input-error-pro',
  templateUrl: './input-error-pro.component.html',
  styleUrls: ['./input-error-pro.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputErrorProComponent {
  @Input() errors: any;
}
