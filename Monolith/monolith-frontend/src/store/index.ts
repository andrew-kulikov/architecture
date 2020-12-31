import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { tasksReducer } from './tasks/reducer';
import { ITaskState } from './tasks/types';

export interface IRootState {
  taskState: ITaskState;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    taskState: tasksReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
