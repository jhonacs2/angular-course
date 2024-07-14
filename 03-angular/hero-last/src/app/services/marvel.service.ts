import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CharacterDetails, MarvelData, MarvelResponse } from '../api/response/marvel-data.interface';
import { SeriesMarvelResponse } from '../api/response/series-marvel-response.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private _httpClient = inject(HttpClient);

  private readonly BASE_URL: string = '/marvel';

  getCharacterByName(nameCharacter: string): Observable<CharacterDetails> {
    return this._httpClient.get<MarvelResponse<MarvelData<CharacterDetails>>>(`${this.BASE_URL}/characters`, {
      params: {
        name: nameCharacter,
        apikey: environment.apikey,
        ts: environment.ts,
        hash: environment.hash,
      }
    }).pipe(map(response => response.data.results[0]));
  }

  getCharacterById(characterId: number): Observable<CharacterDetails> {
    return this._httpClient.get<MarvelResponse<MarvelData<CharacterDetails>>>(`${this.BASE_URL}/characters/${characterId}`, {
      params: {
        characterId,
        apikey: environment.apikey,
        ts: environment.ts,
        hash: environment.hash,
      }
    }).pipe(map(response => response.data.results[0]));
  }

  getCharactersBySeriesId(seriesId: number, offset: number = 1, limit: number = 10,): Observable<CharacterDetails[]> {
    return this._httpClient.get<MarvelResponse<MarvelData<CharacterDetails>>>(`${this.BASE_URL}/characters`, {
      params: {
        series: seriesId,
        limit,
        offset,
        apikey: environment.apikey,
        ts: environment.ts,
        hash: environment.hash,
      }
    }).pipe(map(response => response.data.results));
  }

  getCharacterBySeries(seriesName: string, limit: number = 1): Observable<SeriesMarvelResponse> {
    return this._httpClient.get<MarvelResponse<MarvelData<SeriesMarvelResponse>>>(`${this.BASE_URL}/series`, {
      params: {
        title: seriesName,
        limit,
        apikey: environment.apikey,
        ts: environment.ts,
        hash: environment.hash,
      }
    }).pipe(map(response => response.data.results[0]));
  }
}
