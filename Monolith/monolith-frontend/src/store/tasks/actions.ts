import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';

import axios, { AxiosResponse } from 'axios';

import { Constants } from './constants';
import { API_ARL } from '../common/constants';
import { ICreateTaskRequest, ITask } from './types';
import { Guid } from 'guid-typescript';

export const getAllTasks = () => async (dispatch: Dispatch) => {
  dispatch(action(Constants.GET_ALL_TASKS, {}));

  const response = await axios.get<ITask[]>(`${API_ARL}/api/v1/tasks`);

  if (response.status === 200) {
    return dispatch(setAllTasks(response.data));
  } else {
    //return dispatch(actions.signinFailed({ error: `Error ${res.status}: ${res.statusText}` }))
  }
};

export const createTask = (task: ICreateTaskRequest) => async (
  dispatch: Dispatch
) => {
  const response = await axios.post<ICreateTaskRequest, AxiosResponse<ITask>>(
    `${API_ARL}/api/v1/tasks`,
    task
  );

  if (response.status === 200) {
    return dispatch(
      action(Constants.CREATE_TASK, {
        task: response.data,
      })
    );
  } else {
    //return dispatch(actions.signinFailed({ error: `Error ${res.status}: ${res.statusText}` }))
  }
};

export const deleteTask = (id: Guid) => async (dispatch: Dispatch) => {
  const requestQrl = `${API_ARL}/api/v1/tasks/${id.toString()}`;
  const response = await axios.delete(requestQrl);

  if (response.status === 204) {
    return dispatch(action(Constants.DELETE_TASK, { id }));
  } else {
    //return dispatch(actions.signinFailed({ error: `Error ${res.status}: ${res.statusText}` }))
  }
};

export function setAllTasks(tasks: ITask[]) {
  return action(Constants.SET_ALL_TASKS, {
    tasks,
  });
}
