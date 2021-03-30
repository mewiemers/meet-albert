import { QuizProps } from "../../utils/type";
import styles from "./Quiz.module.css";
import Quizbutton from "../quizbutton/Quizbutton";

// const [currentQuestion, setCurrentQuestion] = useState(0);

// const handleAnswerClick = (isCorrect) => {
//   if (isCorrect) {
//     alert("AMAZING");
//   } else {
//     alert("Hmm, try again!");
//   }
// };

function Quiz({ question, answerOptions }: QuizProps) {
  const option = answerOptions.map((answer) => {
    return (
      <>
        <Quizbutton color="blue" label={answer.answerText} />
        <Quizbutton color="red" label={answer.isCorrect} />
      </>
    );
  });

  return (
    <div className={styles.App}>
      <h1>{question}</h1>
      <div>{option}</div>
    </div>
  );
}

export default Quiz;
