import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTodos from './reducer';
import * as fromApp from '../../store';
import * as todoEntity from './entities/todo.entities';

export const selectTodoState = createFeatureSelector<
    fromApp.State,
    fromTodos.State
>('todos');

const {
    selectAll,
} = todoEntity.adapter.getSelectors();


export const selectAllTodos = createSelector(
    selectTodoState, state => selectAll(state.data)
);


export const selectLoading = createSelector(
    selectTodoState,
    (state) => state.loading
);


export const selectUndoneTodosCount = createSelector(
    selectAll,
    (todos) => todos.filter(t => !t.completed).length
);
