import React, { FC, useState, FormEvent } from "react";
import styles from "./AddTask.module.css";

export interface AddTaskProps {
  onAddTask: (title: string) => void;
}

const AddTask: FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["add-task-form"]}>
      <input
        type="text"
        placeholder="Enter your task here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles["task-input"]}
      />
      <button type="submit" className={styles["add-button"]}>
        Add
      </button>
    </form>
  );
};

export default AddTask;
