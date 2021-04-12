import React from "react";
import styles from "./KookieDetail.module.css";
import Link from "next/link";

function KookieDetail() {
  return (
    <div className={styles.background}>
      <img className={styles.speechbubble} src="/images/questionalbert.svg" />
      <img className={styles.imgalbert} src="/images/left.svg" />
      <img className={styles.speechkookie} src="/images/infokookie.svg" />
      <img className={styles.imgkookie} src="/images/kookie.svg" />
      <Link href={"/card"}>
        <img className={styles.arrow} src="/images/arrow-black.svg" />
      </Link>
    </div>
  );
}

export default KookieDetail;
