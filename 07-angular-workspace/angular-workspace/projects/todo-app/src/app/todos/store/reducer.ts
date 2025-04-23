import {ITodo} from '../models';
import {createReducer, on} from '@ngrx/store';
import * as fromTodos from './actions';

export interface State {
  data: ITodo[];
  loading: boolean;
}

export const initialState: State = {
  data: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(fromTodos.addAction, (state, action) => ({
      ...state,
      data: [...state.data, {
        id: action.id,
        text: action.text,
        creationDate: new Date(),
        completed: false,
      }]
    }),
  ),
  on(fromTodos.loadAction, state => ({
    ...state,
    loading: true,
  })),
  on(fromTodos.loadSuccessAction, (state, action) => ({
    ...state,
    data: action.todos,
    loading: false,
  })),
  on(fromTodos.toggleAction, (state, action) => ({
    ...state,
    data: state.data.map(todo =>
      todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
    ),
  })),
  on(fromTodos.deleteAction, (state, action) => ({
    ...state,
    data: state.data.filter(todo => todo.id !== action.id),
  })),
  on(fromTodos.updateAction, (state, action) => ({
    ...state,
    data: state.data.map(todo =>
      todo.id === action.id ? {...todo, text: action.text} : todo,
    ),
  })),
  on(fromTodos.clearCompletedAction, (state) => ({
      ...state,
      data: state.data.filter(todo => !todo.completed),
    })
  ));
