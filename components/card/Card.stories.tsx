import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { CardProps } from "./Card";

export default {
  title: "Common/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Card",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Card",
};
