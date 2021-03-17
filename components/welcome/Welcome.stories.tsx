import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Welcome from "./Welcome";

export default {
  title: "Common/Welcome",
  component: Welcome,
} as Meta;

const Template: Story = (args) => <Welcome {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
