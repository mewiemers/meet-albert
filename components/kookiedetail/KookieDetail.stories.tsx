import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import KookieDetail from "./KookieDetail";

export default {
  title: "Pages/KookieDetail",
  component: KookieDetail,
} as Meta;

const Template = () => <KookieDetail />;

export const Kookie = Template.bind({});
// Primary.args = {};
