import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'tm-coins',
  templateUrl: './coins.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoinsComponent {
  @Input() coins: number = 0;
}
