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

export type AnswerStatus = "pending" | "wrong" | "correct";

function Quiz({ question, answerOptions }: QuizProps) {
  const [guessStatus, setGuessStatus] = useState("");
  const handleAnswerClick = (answerstatus: AnswerStatus) => {
    if (answerstatus === "correct") {
      setGuessStatus("AMAZING");
    } else {
      setGuessStatus("Hmmm,try again");
    }
  };

  const option = answerOptions.map((answer) => {
    return (
      <>
        <Quizbutton
          color={answer.isCorrect ? "correct" : "wrong"}
          label={answer.answerText}
          test={() => handleAnswerClick}
        />
      </>
    );
  });

  return (
    <div className={styles.App}>
      <h1 className={styles.headline}>QUIZ TIME</h1>
      <h2>{question}</h2>
      <div className={styles.btn}>{option}</div>
      <div>{guessStatus}</div>
      <div>this will be used later, here for the arrow </div>
    </div>
  );
}

export default Quiz;
