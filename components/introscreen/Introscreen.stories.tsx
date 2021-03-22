import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Introscreen from "./Introscreen";

export default {
  title: "Pages/Introscreen",
  component: Introscreen,
} as Meta;

const Template: Story = (args) => <Introscreen {...args} />;

export const Intro = Template.bind({});
Intro.args = {};
