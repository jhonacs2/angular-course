import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'tm-task-card',
  templateUrl: './task-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {
  @Input() taskName: string = '';
  @Input() points: number = 0;
}
