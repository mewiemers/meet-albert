import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import KookiePage from "./KookiePage";

export default {
  title: "Pages/KookiePage",
  component: KookiePage,
} as Meta;

const Template = () => <KookiePage />;

export const Kookie = Template.bind({});
// Primary.args = {};
