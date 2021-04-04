import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import BeforeQuiz, { KookieQuizProps } from "./BeforeQuiz";

export default {
  title: "Pages/BeforeQuiz",
  component: BeforeQuiz,
} as Meta;

const Template: Story<KookieQuizProps> = (args) => <BeforeQuiz {...args} />;

export const Quizarrow = Template.bind({});
Quizarrow.args = {
  link: "#",
};
