import {createReducer, on} from '@ngrx/store';
import * as fromTodos from './actions';
import * as todoEntity from './entities/todo.entities';

export interface State {
    data: todoEntity.State;
    loading: boolean;
}

export const initialState: State = {
    data: todoEntity.initialState,
    loading: false,
};

export const reducer = createReducer(
    initialState,
    on(fromTodos.addAction, (state, action) => ({
            ...state,
            data: todoEntity.adapter.addOne({
                id: action.id,
                text: action.text,
                creationDate: new Date(),
                completed: false,
            }, state.data)
        }),
    ),
    on(fromTodos.loadAction, state => ({
        ...state,
        loading: true,
    })),
    on(fromTodos.loadSuccessAction, (state, action) => ({
        ...state,
        data: todoEntity.adapter.setAll(action.todos, state.data),
        loading: false,
    })),
    on(fromTodos.toggleAction, (state, action) => ({
        ...state,
        data: todoEntity.adapter.updateOne(
            {
                id: action.id,
                changes: {
                    completed: !state.data.entities[action.id]?.completed,
                },
            }, state.data),
    })),
    on(fromTodos.deleteAction, (state, action) => ({
        ...state,
        data: todoEntity.adapter.removeOne(action.id, state.data),
    })),
    on(fromTodos.updateAction, (state, action) => ({
        ...state,
        data: todoEntity.adapter.updateOne({
            id: action.id,
            changes: {text: action.text},
        }, state.data),
    })),
    on(fromTodos.clearCompletedAction, (state) => ({
            ...state,
            data: todoEntity.adapter.removeMany(
                state.data.ids.filter(id => state.data.entities[id]?.completed),
                state.data,
            ),
        })
    )
);
