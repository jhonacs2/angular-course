import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CharacterService} from './services/character.service';
import {Observable} from 'rxjs';
import {ICharacter} from './interfaces/character.interface';

@Component({
  selector: 'tm-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  characterData$: Observable<ICharacter> = this._characterService.characterState$;

  constructor(private _characterService: CharacterService) {
  }
}
