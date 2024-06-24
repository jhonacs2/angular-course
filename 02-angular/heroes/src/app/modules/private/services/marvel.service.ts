import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelResponse, ResultMarvel } from '../../../api/response/marvel-data.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class MarvelService {
  private baseUrl = '/marvel';

  constructor(private _httpClient: HttpClient) {
  }

  getCharacterByName(nameCharacter: string): Observable<ResultMarvel> {
    return this._httpClient.get<MarvelResponse>(`${this.baseUrl}/characters`, {
      params: {
        name: nameCharacter,
        apikey: environment.apikey,
        ts: environment.ts,
        hash: environment.hash,
      }
    }).pipe(map(response => response.data.results[0]));
  }
}
