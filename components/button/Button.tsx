import styles from "./Button.module.css";
import Link from "next/link";

export type ButtonProps = {
  primary?: boolean;
  label: string;
  link: string;
};

function Button({ link, primary, label, ...props }: ButtonProps) {
  return (
    <Link href={link}>
      <button
        className={`${styles.btn} ${primary ? styles.primary : ""}`}
        {...props}
      >
        {label}
      </button>
    </Link>
  );
}

export default Button;
