import React from 'react';
import { ITask } from '../../store/tasks/types';

type TaskListProps = {
  tasks: ITask[];
};

const TaskList: React.FunctionComponent<TaskListProps> = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id.toString()}>{task.title}</li>
    ))}
  </ul>
);

export default TaskList;
