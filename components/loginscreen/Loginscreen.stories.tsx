import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Loginscreen from "./Loginscreen";

export default {
  title: "Pages/Loginscreen",
  component: Loginscreen,
} as Meta;

const Template: Story = () => <Loginscreen />;

export const Primary = Template.bind({});
Primary.args = {};
