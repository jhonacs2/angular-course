import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../../interfaces/user.interface';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'ad-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTodoComponent implements OnInit, OnChanges {
  @Input() user: User | null = null;
  @Input() externalCounter: number = 0;

  counter: number = 0;
  lastChange: string = 'Inicial';

  constructor(private _profileService: ProfileService) {
  }

  ngOnInit(): void {
    this._profileService.fullName = this.user?.name ?? '';
    this._profileService.profilePic = this.user?.picture ?? '';
  }

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
