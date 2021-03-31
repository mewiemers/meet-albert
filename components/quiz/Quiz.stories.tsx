// import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Quiz from "./Quiz";
import { QuizProps } from "./Quiz";

export default {
  title: "Pages/Quiz",
  component: Quiz,
} as Meta;

const Template: Story<QuizProps> = (args) => <Quiz {...args} />;

export const Quizzie = Template.bind({});
Quizzie.args = {
  question: "Which bird did Albert meet?",
  answerOptions: [
    {
      answerText: "blue bird",
      isCorrect: false,
    },
    {
      answerText: "kookaburra",
      isCorrect: true,
    },
    {
      answerText: "emu",
      isCorrect: false,
    },
  ],
};
