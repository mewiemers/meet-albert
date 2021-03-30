import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Citypage from "./Citypage";

export default {
  title: "Pages/Citypage",
  component: Citypage,
} as Meta;

const Template: Story = (args) => <Citypage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
