import React from "react";
import styles from "./KookieDetail.module.css";

function KookieDetail() {
  return (
    <div className={styles.background}>
      <img className={styles.speechbubble} src="/questionalbert.svg" />
      <img className={styles.imgalbert} src="/left.svg" />
      <img className={styles.speechkookie} src="/infokookie.svg" />

      <img className={styles.imgkookie} src="/kookie.svg" />
    </div>
  );
}

export default KookieDetail;
