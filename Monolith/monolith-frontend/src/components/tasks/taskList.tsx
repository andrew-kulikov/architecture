import React from 'react';
import { ITask, DeleteTaskFunctionType } from '../../store/tasks/types';

type TaskListProps = {
  tasks: ITask[];
  deleteTask: DeleteTaskFunctionType;
};

const TaskList: React.FunctionComponent<TaskListProps> = ({
  tasks,
  deleteTask,
}) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id.toString()}>
        {task.title}{' '}
        <button onClick={(e) => deleteTask(task.id)}>Remove</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
