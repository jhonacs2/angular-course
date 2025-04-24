import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITodo} from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private _httpClient: HttpClient) {
  }

  getTodos(): Observable<ITodo[]> {
    return this._httpClient.get<ITodo[]>('assets/todos.json');
  }
}
