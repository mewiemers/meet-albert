import styles from "./Quiz.module.css";
import Quizbutton from "../quizbutton/Quizbutton";
import { useState } from "react";
import Link from "next/link";

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
          status={answer.isCorrect ? "correct" : "wrong"}
          label={answer.answerText}
          handleAnswer={handleAnswerClick}
        />
      </>
    );
  });
  return (
    <main>
      <div className={styles.App}>
        <h1 className={styles.headline}>QUIZ TIME</h1>
        <h2 className={styles.subheadline}>{question}</h2>
        <div className={styles.btn}>{option}</div>
        <div className={styles.output}>{guessStatus}</div>
        <Link href={"/introduce"}>
          <img className={styles.map} src="/images/backtomap.svg" />
        </Link>
      </div>
    </main>
  );
}
export default Quiz;
