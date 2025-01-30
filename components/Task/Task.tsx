import React, { FC } from "react";
import styles from "./Task.module.css";

export type TaskState = "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";

export interface ITask {
  id: string;
  title: string;
  state: TaskState;
}

export interface TaskProps {
  task: ITask;
  onArchiveTask: (id: string) => void;
  onUnArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task: FC<TaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onUnArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`${styles["list-item"]} ${styles[state]}`}>
      <label
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
        className={styles.checkbox}
      >
        <input
          id={`archiveTask-${id}`}
          type="checkbox"
          name="checked"
          checked={state === "TASK_ARCHIVED"}
          readOnly
        />
        <span
          className={styles["checkbox-custom"]}
          onClick={() =>
            state === "TASK_INBOX" || state === "TASK_PINNED"
              ? onArchiveTask(id)
              : onUnArchiveTask(id)
          }
        />
      </label>

      <label
        htmlFor={`title-${id}`}
        aria-label={title}
        className={styles.title}
      >
        <input
          id={`title-${id}`}
          type="text"
          value={title}
          readOnly
          name="title"
          placeholder="Input title"
          style={{ textOverflow: "ellipsis" }}
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className={styles["pin-button"]}
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
        >
          <span className={styles["icon-star"]} />
        </button>
      )}
    </div>
  );
};

export default Task;
