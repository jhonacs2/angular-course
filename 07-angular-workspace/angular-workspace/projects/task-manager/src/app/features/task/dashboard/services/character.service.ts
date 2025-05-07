import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICharacter} from '../interfaces/character.interface';

@Injectable()
export class CharacterService {
  private _initialCharacterState: ICharacter = {
    level: 1,
    xp: 0,
    strength: 60,
    intelligence: 20,
    charisma: 20,
    creativity: 30,
    coins: 150
  };
  private _characterStateSubject: BehaviorSubject<ICharacter> = new BehaviorSubject<ICharacter>(this._initialCharacterState);

  characterState$: Observable<ICharacter> = this._characterStateSubject.asObservable();
}
