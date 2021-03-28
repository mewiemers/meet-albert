import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Common/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Traveling = Template.bind({});
Traveling.args = {
  label: "Traveling",
  link: "",
};

export const Discover = Template.bind({});
Discover.args = {
  label: "Discover",
  link: "",
};

export const YesButton = Template.bind({});
YesButton.args = {
  label: "YES!",
  link: "",
};
