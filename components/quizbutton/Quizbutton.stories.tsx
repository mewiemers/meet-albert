import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import QuizButton, { QuizButtonProps } from "./Quizbutton";

export default {
  title: "Common/QuizButton",
  component: QuizButton,
} as Meta;

const Template: Story<QuizButtonProps> = (args) => <QuizButton {...args} />;

export const AnswerButton = Template.bind({});
AnswerButton.args = {
  label: "",
  color: "blue",
};

export const RightButton = Template.bind({});
RightButton.args = {
  label: "",
  color: "green",
};

export const WrongButton = Template.bind({});
WrongButton.args = {
  label: "",
  color: "red",
};
