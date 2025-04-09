import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../../interfaces/user.interface';

@Component({
  selector: 'ad-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTodoComponent implements OnChanges {
  @Input() user: User | null = null;
  @Input() externalCounter: number = 0;

  counter: number = 0;
  lastChange: string = 'Inicial';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      console.log('Cambio detectado en el input "user":', changes['user']);
      this.lastChange = 'Cambio en el input "user"';
    }

    if (changes['externalCounter']) {
      console.log('Cambio detectado en el input "externalCounter":', changes['externalCounter']);
      this.lastChange = 'Cambio en el input "externalCounter"';
    }
  }

  incrementCounter(): void {
    this.counter++;
    console.log('Contador local incrementado:', this.counter);
    // No necesitamos marcar para la detección de cambios aquí porque la interacción
    // del usuario (click) ya dispara la detección de cambios localmente.
  }
}
