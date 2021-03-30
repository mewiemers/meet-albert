import React from "react";
import styles from "./Citypage.module.css";

function Citypage() {
  return (
    <div className={styles.background}>
      <img className={styles.speechbubble} src="/bubble-albert.svg" />
      <img className={styles.imgalbert} src="/Albert.svg" />
      <img className={styles.imgkookie} src="/kookie.svg" />
    </div>
  );
}

export default Citypage;
