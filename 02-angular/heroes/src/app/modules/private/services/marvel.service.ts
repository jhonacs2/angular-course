import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDetails, MarvelData, MarvelResponse } from '../../../api/response/marvel-data.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { SeriesMarvelResponse } from '../../../api/response/series-marvel-response.interface';

@Injectable()
export class MarvelService {
  private baseUrl = '/marvel';

  constructor(private _httpClient: HttpClient) {
  }

  getCharacterByName(nameCharacter: string): Observable<CharacterDetails> {
    return this._httpClient.get<MarvelResponse<MarvelData<CharacterDetails>>>(`${this.baseUrl}/characters`, {
      params: {
        name: nameCharacter,
        apikey: environment.apikey,
        ts: environment.ts,
        hash: environment.hash,
      }
    }).pipe(map(response => response.data.results[0]));
  }

  getCharacterById(characterId: number): Observable<CharacterDetails> {
    return this._httpClient.get<MarvelResponse<MarvelData<CharacterDetails>>>(`${this.baseUrl}/characters/${characterId}`, {
      params: {
        characterId,
        apikey: environment.apikey,
        ts: environment.ts,
        hash: environment.hash,
      }
    }).pipe(map(response => response.data.results[0]));
  }

  getCharactersBySeriesId(seriesId: number, offset: number = 1, limit: number = 10,): Observable<CharacterDetails[]> {
    return this._httpClient.get<MarvelResponse<MarvelData<CharacterDetails>>>(`${this.baseUrl}/characters`, {
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
    return this._httpClient.get<MarvelResponse<MarvelData<SeriesMarvelResponse>>>(`${this.baseUrl}/series`, {
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
