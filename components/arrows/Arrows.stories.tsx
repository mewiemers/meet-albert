import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Arrows, { ArrowProps } from "./Arrows";

export default {
  title: "Common/Arrows",
  component: Arrows,
} as Meta;

const Template: Story<ArrowProps> = (args) => <Arrows {...args} />;

export const BlackArrow = Template.bind({});
BlackArrow.args = {
  backgroundColor: "var(--font-color)",
};

export const BrownArrow = Template.bind({});
BrownArrow.args = {
  backgroundColor: "var(--link-color)",
};
