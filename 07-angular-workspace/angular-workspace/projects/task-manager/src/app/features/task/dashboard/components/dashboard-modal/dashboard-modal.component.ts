import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {ActivityResponse} from '../../interfaces/activity-response.interface';

@Component({
  selector: 'tm-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'modal',
  }
})
export class DashboardModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() createTask = new EventEmitter<ActivityResponse>();

  onCreateTask(): void {
    this.createTask.emit({
      id: Math.random(),
      mission: 'New Task',
      description: 'New Task Description',
      points: 10,
      isCompleted: false
    });
  }
}
