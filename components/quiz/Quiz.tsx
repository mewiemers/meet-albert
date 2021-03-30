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
  const option = answerOptions.map((answer, index) => (
    <div key={index}>
      <div>{answer.answerText}</div>
      <div>{answer.isCorrect}</div>
    </div>
  ));

  return (
    <div className={styles.App}>
      <h1>{question}</h1>
      <Quizbutton color="blue" label="blue bird" />
      <Quizbutton color="blue" label="kookaburra" />
      <Quizbutton color="blue" label="emu" />
      <div>{option}</div>
    </div>
  );
}

export default Quiz;
