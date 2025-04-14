import {Injectable} from '@angular/core';
import {Result} from '../../../interfaces/character-request.interface';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {RickAndMortyService} from '../../../services/rick-and-morty.service';
import {catchError, delay, map} from 'rxjs/operators';

@Injectable()
export class CharacterRickMortyResolverService implements Resolve<Result[]> {
  constructor(private _rickAndMortyService: RickAndMortyService) {
  }

  resolve(): Observable<Result[]> {
    return this._rickAndMortyService.getCharacters()
      .pipe(
        delay(2000),
        map(characterResponse => characterResponse.results),
        catchError(err => of([])));
  }
}
