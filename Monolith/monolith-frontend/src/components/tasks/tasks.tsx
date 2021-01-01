import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import TaskList from './taskList';

import { connect } from 'react-redux';

import { IRootState } from '../../store';
import { ITaskState } from '../../store/tasks/types';
import { getAllTasks } from '../../store/tasks/actions';

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
  useEffect(() => {
    requestAllTasks();
  }, [requestAllTasks]);

  return (
    <div className="tasks">
      <div>
        <span> Tasks {loading && <span>(Loading...)</span>} </span>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
