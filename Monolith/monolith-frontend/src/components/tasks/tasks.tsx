import React, { useEffect, useState } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import TaskList from './taskList';

import { connect } from 'react-redux';

import { IRootState } from '../../store';
import { ITaskState, ICreateTaskRequest } from '../../store/tasks/types';
import { getAllTasks, createTask, deleteTask } from '../../store/tasks/actions';
import { Guid } from 'guid-typescript';

const mapStateToProps = ({ taskState }: IRootState) => ({
  tasks: taskState.tasks,
  loading: taskState.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<ITaskState, void, Action>
) => ({
  requestAllTasks() {
    dispatch(getAllTasks());
  },
  createTask(title: string) {
    const request: ICreateTaskRequest = { title, description: '' };
    dispatch(createTask(request));
  },
  requestDeleteTask(id: Guid) {
    dispatch(deleteTask(id));
  },
});

type TasksProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Tasks: React.FunctionComponent<TasksProps> = ({
  tasks,
  loading,
  requestAllTasks,
  createTask,
  requestDeleteTask,
}) => {
  const [title, setTtile] = useState<string>('');

  useEffect(() => {
    requestAllTasks();
  }, [requestAllTasks]);

  return (
    <div className="tasks">
      <div>
        <span> Tasks {loading && <span>(Loading...)</span>} </span>
      </div>
      <div>
        <span>Add new task: </span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTtile(e.target.value)}
        ></input>
        <button onClick={(e) => createTask(title)}>Submit task</button>
      </div>
      <TaskList tasks={tasks} deleteTask={requestDeleteTask} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
