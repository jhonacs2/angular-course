import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {User} from './interfaces/user.interface';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'workspace-app';
  currentUser: User = {name: 'Jhonatan', age: 28};
  parentCounter: number = 0;

  constructor(private _cdr: ChangeDetectorRef) {
  }

  changeUserObject(): void {
    // Crear una nueva *referencia* al objeto para que OnPush detecte el cambio
    this.currentUser = {...this.currentUser, age: this.currentUser.age + 1};
    console.log('Cambiando la referencia del objeto usuario:', this.currentUser);
  }

  updateUserProperty(): void {
    // Mutar la propiedad del objeto *sin* cambiar la referencia
    this.currentUser.age++;
    this._cdr.detectChanges();
    console.log('Mutando la propiedad del objeto usuario:', this.currentUser);
    // En este caso, el componente OnPush *no* detectará el cambio automáticamente.
    // Necesitarías forzar la detección de cambios si quisieras que se reflejara.
  }

  incrementParentCounter(): void {
    this.parentCounter++;
    console.log('Incrementando el contador del padre:', this.parentCounter);
  }
}
