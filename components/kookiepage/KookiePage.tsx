import React from "react";
import styles from "./KookiePage.module.css";

function KookieDetail() {
  return (
    <>
      <div className={styles.background}>
        <img className={styles.speechbubble} src="/speechdetail.svg" />
        <img className={styles.imgalbert} src="/Albert.svg" />
        <img className={styles.speechkookie} src="/speechkookie.svg" />
        <img className={styles.imgkookie} src="/kookie.svg" />
      </div>
    </>
  );
}

export default KookieDetail;
