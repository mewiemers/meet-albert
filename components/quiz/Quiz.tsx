import styles from "./Quiz.module.css";
import Quizbutton from "../quizbutton/Quizbutton";
import { useState } from "react";

export type QuizProps = {
  _id?: string;
  question: string;
  answerOptions: Answer[];
};
export type Answer = {
  answerText: string;
  isCorrect: boolean;
};

function Quiz({ question, answerOptions }: QuizProps) {
  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      alert("AMAZING"), setColorchange("green");
    } else {
      alert("Hmm, try again!"), setColorchange("red");
    }
  };
  const [colorchange, setColorchange] = useState("blue");

  const option = answerOptions.map((answer) => {
    return (
      <>
        <Quizbutton
          color={colorchange}
          label={answer.answerText}
          onClick={() => {
            handleAnswerClick(answer.isCorrect);
          }}
        />
      </>
    );
  });

  return (
    <div className={styles.App}>
      <h1 className={styles.headline}>QUIZ TIME</h1>
      <h2>{question}</h2>
      <div className={styles.btn}>{option}</div>
    </div>
  );
}

export default Quiz;
