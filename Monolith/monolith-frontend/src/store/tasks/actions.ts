import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';

import axios from 'axios';

import { Constants } from './constants';
import { ITask } from './types';

export const getAllTasks = () => async (dispatch: Dispatch) => {
  dispatch(action(Constants.GET_ALL_TASKS, {}));
 
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await axios.get<ITask[]>('https://localhost:5001/api/v1/tasks');

  if (response.status === 200) {
    return dispatch(setAllTasks(response.data));
  } else {
    //return dispatch(actions.signinFailed({ error: `Error ${res.status}: ${res.statusText}` }))
  }
};

export function setAllTasks(tasks: ITask[]) {
  return action(Constants.SET_ALL_TASKS, {
    tasks,
  });
}
