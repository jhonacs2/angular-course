import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'tm-activity-card',
  templateUrl: './activity-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block task-item bg-zinc-900 hover:shadow-md hover:bg-zinc-800 rounded-lg p-4  transform transition-all duration-300'
  }
})
export class ActivityCardComponent {
  @Input() mission: string = '';
  @Input() description: string = '';
  @Input() points: number = 10;
}
