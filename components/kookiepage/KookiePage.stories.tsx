import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import KookiePage from "./KookiePage";
import { KookieProps } from "./KookiePage";

export default {
  title: "Pages/KookiePage",
  component: KookiePage,
} as Meta;

const Template: Story<KookieProps> = (args) => <KookiePage {...args} />;

export const Kookie = Template.bind({});
Kookie.args = {
  link: "#",
};
