import { useState } from "react";
import styles from "./Quizbutton.module.css";

export type QuizButtonProps = {
  label?: string;
  status: "pending" | "wrong" | "correct" | "standard";
  test?: (status: string) => void;
};

export default function QuizButton({
  label,
  status,
  test,
  ...props
}: QuizButtonProps) {
  const [colorChange, setColorChange] = useState("pending");
  function handleClick(status: string) {
    setColorChange(status);
    test(status);
  }
  return (
    <button
      className={`${styles.standard} ${styles[colorChange]}`}
      {...props}
      onClick={() => handleClick(status)}
    >
      {label}
    </button>
  );
}
