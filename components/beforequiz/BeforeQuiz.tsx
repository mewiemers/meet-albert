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
        <img className={styles.speechbubble} src="/images/goodbyealbert.svg" />
        <img className={styles.imgalbert} src="/images/Albert.svg" />
        <img className={styles.speechkookie} src="/images/goodbykookie.svg" />
        <Link href={link}>
          <img className={styles.quiz} src="/images/Quizarrow.svg" />
        </Link>
        <img className={styles.imgkookie} src="/images/kookie.svg" />
      </div>
    </>
  );
}

export default BeforeQuiz;
