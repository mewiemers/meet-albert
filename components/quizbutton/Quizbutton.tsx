import styles from "./Quizbutton.module.css";

export type QuizButtonProps = {
  label: string;
  color: "blue" | "red" | "green";
};

export default function QuizButton({
  label,
  color,
  ...props
}: QuizButtonProps) {
  return (
    <button className={styles[color]} {...props}>
      {label}
    </button>
  );
}
