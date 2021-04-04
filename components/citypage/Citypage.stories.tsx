import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Citypage, { CityProps } from "./Citypage";

export default {
  title: "Pages/Citypage",
  component: Citypage,
} as Meta;

const Template: Story<CityProps> = (args) => <Citypage {...args} />;

export const Link = Template.bind({});
Link.args = {
  link: "/kookiepage",
};
