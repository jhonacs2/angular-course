import * as todoState from '../todos/store';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  todos: todoState.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: todoState.reducer
};
