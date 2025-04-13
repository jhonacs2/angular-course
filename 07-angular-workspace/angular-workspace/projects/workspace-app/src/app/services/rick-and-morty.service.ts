import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterRequest} from '../interfaces/character-request.interface';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private readonly BASE_URL: string = 'https://rickandmortyapi.com';

  constructor(private _http: HttpClient) {
  }

  getCharacters(): Observable<CharacterRequest> {
    return this._http.get<CharacterRequest>(`${this.BASE_URL}/api/character`).pipe(first());
  }
}
