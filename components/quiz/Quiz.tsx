import { QuizProps } from "../../utils/type";
import styles from "./Quiz.module.css";
import Quizbutton from "../quizbutton/Quizbutton";

function Quiz({ question, answerOptions }: QuizProps) {
  const option = answerOptions.map((answer) => {
    return (
      <>
        <Quizbutton color="blue" label={answer.answerText} />
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
