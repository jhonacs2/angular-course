import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTodos from './reducer';
import * as fromApp from '../../store';

export const selectTodoState = createFeatureSelector<
  fromApp.State,
  fromTodos.State
>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state) => state.data
);

export const selectLoading = createSelector(
  selectTodoState,
  (state) => state.loading
);

export const selectUndoneTodosCount = createSelector(
  selectTodoState,
  (state) => state.data.filter(t => !t.completed).length
);
