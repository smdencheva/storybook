import React, { FC } from "react";
import Task, { ITask } from "../Task/Task";
import styles from "./TaskList.module.css";

export interface TaskListProps {
  tasks: ITask[];
  onArchiveTask: (id: string) => void;
  onUnArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({
  tasks,
  onArchiveTask,
  onUnArchiveTask,
  onPinTask,
}) => {
  if (tasks.length === 0) {
    return <div className={styles["list-items"]}>No tasks available</div>;
  }

  return (
    <div className={styles["list-items"]}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onArchiveTask={onArchiveTask}
          onUnArchiveTask={onUnArchiveTask}
          onPinTask={onPinTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
