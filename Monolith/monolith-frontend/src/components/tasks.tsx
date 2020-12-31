import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import { connect } from 'react-redux';

import { IRootState } from '../store';
import { ITaskState } from '../store/tasks/types';
import { getAllTasks } from '../store/tasks/actions';

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
});

type TasksProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Tasks: React.FunctionComponent<TasksProps> = ({
  tasks,
  loading,
  requestAllTasks,
}) => {
  console.log('Rendering tasks', tasks);
  console.log('Loading:', loading);

  useEffect(() => {
    requestAllTasks();
  }, [requestAllTasks]);

  return (
    <div className="tasks">
      <span> Tasks {loading && <span>(Loading...)</span>} </span>
      <ul>
        {tasks.map((task) => (
          <li key={task.id.toString()}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
