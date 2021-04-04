import React from "react";
import styles from "./KookiePage.module.css";
import Link from "next/link";

export type KookieProps = {
  link: string;
};

function KookiePage({ link }: KookieProps) {
  return (
    <>
      <div className={styles.background}>
        <img className={styles.speechbubble} src="/speechdetail.svg" />
        <img className={styles.imgalbert} src="/Albert.svg" />
        <img className={styles.speechkookie} src="/speechkookie.svg" />
        <Link href={link}>
          <img className={styles.imgkookie} src="/kookie.svg" />
        </Link>
      </div>
    </>
  );
}

export default KookiePage;
