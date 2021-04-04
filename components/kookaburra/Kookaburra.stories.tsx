import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Kookaburra from "./Kookaburra";

export default {
  title: "Pages/Kookaburra",
  component: Kookaburra,
} as Meta;

const Template = () => <Kookaburra />;

export const Kookie = Template.bind({});
// Primary.args = {};
