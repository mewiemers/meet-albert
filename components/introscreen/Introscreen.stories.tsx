import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Introscreen from "./Introscreen";

export default {
  title: "Common/Introscreen",
  component: Introscreen,
  //   parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story = (args) => <Introscreen {...args} />;

export const Intro = Template.bind({});
Intro.args = {};
