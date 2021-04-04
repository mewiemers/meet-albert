import React from "react";
import styles from "./BeforeQuiz.module.css";
import Link from "next/link";

export type KookieQuizProps = {
  link: string;
};

function BeforeQuiz({ link }: KookieQuizProps) {
  return (
    <>
      <div className={styles.background}>
        <img className={styles.speechbubble} src="/goodbyealbert.svg" />
        <img className={styles.imgalbert} src="/Albert.svg" />
        <img className={styles.speechkookie} src="/goodbykookie.svg" />
        <Link href={link}>
          <img className={styles.quiz} src="/Quizarrow.svg" />
        </Link>
        <img className={styles.imgkookie} src="/kookie.svg" />
      </div>
    </>
  );
}

export default BeforeQuiz;
