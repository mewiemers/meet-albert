import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Canvas from "./Canvas";

export default {
  title: "Common/Canvas",
  component: Canvas,
} as Meta;

const Template: Story = (args) => <Canvas {...args} />;

export const Move = Template.bind({});
Move.args = {};
