import React from "react";
import MyForm from "./MyForm";

export default {
  title: "Components/MyForm",
  component: MyForm,
};

const Template = (args) => <MyForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
