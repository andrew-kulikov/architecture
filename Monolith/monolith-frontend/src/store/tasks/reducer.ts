import { ITaskState, TasksActions } from './types';
import { Constants } from './constants';

const initialState: ITaskState = {
  tasks: [],
  loading: false,
};

export function tasksReducer(
  state: ITaskState = initialState,
  action: TasksActions
): ITaskState {
  switch (action.type) {
    case Constants.SET_ALL_TASKS:
      console.log('Set all tasks triggered', action.payload.tasks);
      return { tasks: action.payload.tasks, loading: false };
    case Constants.GET_ALL_TASKS:
      console.log('Get all tasks triggered');
      return { ...state, loading: true };
    default:
      return state;
  }
}
