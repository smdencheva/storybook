import type { Meta, StoryObj } from "@storybook/react";
import AddTask from "./AddTask";
import { AddTaskProps } from "./AddTask";

export default {
  title: "Components/AddTask",
  component: AddTask,
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof AddTask>;

export const Default: Story = {
  args: {
    onAddTask: (title: string) => alert(`Task Added: ${title}`),
  } as AddTaskProps,
};
