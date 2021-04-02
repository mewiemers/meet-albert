import { MouseEventHandler, useState } from "react";
import styles from "./Quizbutton.module.css";

export type QuizButtonProps = {
  label?: string | boolean;
  //yes, i know, this is not lucky naming, but its too late today, i will change it the next few days
  color?: "pending" | "wrong" | "correct" | "standard";
  isCorrect?: boolean;
  //dont know which type is working here, any suggestion?
  test?: MouseEventHandler<HTMLButtonElement>;
};

export default function QuizButton({
  label,
  color,
  test,
  ...props
}: QuizButtonProps) {
  const [colorChange, setColorChange] = useState("pending");
  function handleClick(color: string) {
    setColorChange(color);
    test(color);
  }
  return (
    <button
      className={`${styles.standard} ${styles[colorChange]}`}
      {...props}
      onClick={() => handleClick(color)}
    >
      {label}
    </button>
  );
}
