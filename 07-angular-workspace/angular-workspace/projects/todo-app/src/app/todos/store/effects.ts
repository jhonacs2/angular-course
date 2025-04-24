import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromTodos from '../store';
import {TodosService} from '../services/todos.service';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  constructor(private _todosService: TodosService,
              private _actions$: Actions) {
  }

  loadTodos$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fromTodos.loadAction),
      switchMap(action => this._todosService.getTodos()),
      map(todos => fromTodos.loadSuccessAction({todos})),
    ),
  );
}
