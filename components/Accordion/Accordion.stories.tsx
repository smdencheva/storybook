import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Accordion, { AccordionProps } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    title: { control: "text" },
    defaultOpen: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => (
  <Accordion {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
      metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
      justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
      sollicitudin vel erat vel, interdum mattis neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
      metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
      justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
      sollicitudin vel erat vel, interdum mattis neque.
    </p>
  </Accordion>
);

export const Closed = Template.bind({});
Closed.args = {
  title: "Accordion Title",
  defaultOpen: false,
};

export const Open = Template.bind({});
Open.args = {
  title: "Accordion Title",
  defaultOpen: true,
};
