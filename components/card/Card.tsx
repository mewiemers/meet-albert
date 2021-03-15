import styles from "./Card.module.css";

export type CardProps = {
  primary: boolean;
  label: string;
};

function Button({ primary, label, ...props }: CardProps) {
  return (
    <button
      className={`${styles.btn} ${primary ? styles.primary : ""}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
