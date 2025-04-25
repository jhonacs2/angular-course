import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ITodo} from '../../models';

export interface State extends EntityState<ITodo> {
  ids: number[];
}

export const adapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
    selectId: (todo: ITodo) => todo.id
    //you can add Comparator
  }
);

export const initialState: State = adapter.getInitialState({
  ids: [],
});
