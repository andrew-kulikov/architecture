import { Guid } from "guid-typescript";
import { ActionType } from 'typesafe-actions';
import { setAllTasks } from './actions';
import {Constants} from './constants';

export interface ITask {
    id: Guid,
    title: string,
    description: string
}

export interface ICreateTaskRequest {
    title: string,
    description: string
}

export interface ITaskState {
    tasks: ITask[],
    loading: boolean
}

export type GetAllTasksAction = {
    type: Constants.GET_ALL_TASKS,
    payload: {}
}

export type CreateTaskAction = {
    type: Constants.CREATE_TASK,
    payload: {
        task: ITask
    }
}

export type DeleteTaskAction = {
    type: Constants.DELETE_TASK,
    payload: {
        id: Guid
    }
}

export type DeleteTaskFunctionType = (id: Guid) => void;

export type TasksActions =  GetAllTasksAction | CreateTaskAction | DeleteTaskAction | ActionType<typeof setAllTasks>;