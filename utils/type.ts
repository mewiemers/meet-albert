export type Animal = {
  _id: string;
  name: string;
  ImgSrc: string;
  description: string;
  audioFile: string;
};

export type QuizProps = {
  _id: string;
  question: string;
  answerOptions: Answer[];
};
export type Answer = {
  answerText: string;
  isCorrect: boolean;
};
