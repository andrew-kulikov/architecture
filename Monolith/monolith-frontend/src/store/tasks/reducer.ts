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
      return { tasks: action.payload.tasks, loading: false };
    case Constants.CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload.task] };
    case Constants.GET_ALL_TASKS:
      return { ...state, loading: true };
    default:
      return state;
  }
}
