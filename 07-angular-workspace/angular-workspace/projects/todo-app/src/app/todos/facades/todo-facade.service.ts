import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store';
import * as fromTodos from '../store';
import {Observable} from 'rxjs';
import {ITodo} from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  constructor(private store: Store<fromApp.State>) {
  }

  getTodos(): Observable<ITodo[]> {
    return this.store.select(fromTodos.selectAllTodos);
  }

  loadTodos(): void {
    this.store.dispatch(fromTodos.loadAction());
  }
}
