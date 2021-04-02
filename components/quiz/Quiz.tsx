import styles from "./Quiz.module.css";
import Quizbutton from "../quizbutton/Quizbutton";

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
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("AMAZING!");
    } else {
      alert("Hmm, try again!");
    }
  };

  const option = answerOptions.map((answer) => {
    return (
      <>
        <Quizbutton
          color="blue"
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
