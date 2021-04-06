import React from "react";
import styles from "./KookieDetail.module.css";
import Link from "next/link";

function KookieDetail() {
  return (
    <div className={styles.background}>
      <img className={styles.speechbubble} src="/questionalbert.svg" />
      <img className={styles.imgalbert} src="/left.svg" />
      <img className={styles.speechkookie} src="/infokookie.svg" />
      <img className={styles.imgkookie} src="/kookie.svg" />
      <Link href={"/card"}>
        <img className={styles.arrow} src="/arrow-black.svg" />
      </Link>
    </div>
  );
}

export default KookieDetail;
