import { MouseEventHandler } from "react";
import styles from "./Quizbutton.module.css";

export type QuizButtonProps = {
  label?: string | boolean;
  color?: "blue" | "red" | "green" | string;
  isCorrect?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function QuizButton({
  label,
  color,
  ...props
}: QuizButtonProps) {
  return (
    <button className={`${styles.standard} ${styles[color]}`} {...props}>
      {label}
    </button>
  );
}
