import type { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import { TaskListProps } from "./TaskList";

export default {
  title: "Components/TaskList",
  component: TaskList,
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    tasks: [
      { id: "1", title: "Task 1", state: "TASK_INBOX" },
      { id: "2", title: "Task 2", state: "TASK_PINNED" },
      { id: "3", title: "Task 3", state: "TASK_INBOX" },
    ],
    onArchiveTask: (id: string) => console.log(`Archive ${id}`),
    onUnArchiveTask: (id: string) => console.log(`Unarchive ${id}`),
    onPinTask: (id: string) => console.log(`Pin ${id}`),
  } as TaskListProps,
};

export const EmptyList: Story = {
  args: {
    tasks: [],
    onArchiveTask: (id: string) => console.log(`Archive ${id}`),
    onUnArchiveTask: (id: string) => console.log(`Unarchive ${id}`),
    onPinTask: (id: string) => console.log(`Pin ${id}`),
  } as TaskListProps,
};
