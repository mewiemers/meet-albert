import React, { useEffect, useState } from "react";
import Quiz from "../components/quiz/Quiz";
import type { Question } from "../server/db";
function Questions() {
  const [choice, setChoice] = useState<Question>(null);

  useEffect(() => {
    fetch("/api/quizanswers")
      .then((response) => response.json())
      .then((quizAnswers) => setChoice(quizAnswers[0]));
  }, []);

  if (!choice) {
    return <div>kookie is flying to you....</div>;
  }

  return (
    <Quiz answerOptions={choice.answerOptions} question={choice.question} />
  );
}

export default Questions;
