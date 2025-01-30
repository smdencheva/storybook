import type { Meta, StoryObj } from "@storybook/react";
import Task, { TaskProps } from "./Task";

export default {
  title: "Components/Task",
  component: Task,
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
    onArchiveTask: (id: string) => console.log(`Archived ${id}`),
    onUnArchiveTask: (id: string) => console.log(`Unarchived ${id}`),
    onPinTask: (id: string) => console.log(`Pinned ${id}`),
  } as TaskProps,
};

export const Pinned: Story = {
  args: {
    ...Default.args,
    task: {
      ...Default.args?.task,
      state: "TASK_PINNED",
    },
  } as TaskProps,
};

export const Archived: Story = {
  args: {
    ...Default.args,
    task: {
      ...Default.args?.task,
      state: "TASK_ARCHIVED",
    },
  } as TaskProps,
};

const longTitleString = "Super large task name, not quite useful!";

export const LongTitle: Story = {
  args: {
    ...Default.args,
    task: {
      ...(Default.args?.task || {}),
      title: longTitleString,
    },
  } as TaskProps,
};
