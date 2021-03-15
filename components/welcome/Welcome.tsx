import React from "react";
import styles from "./Welcome.module.css";

// export type LogoProps = {};
function Logo() {
  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>Meet</h1>
      <img src="/logo-albert.svg" />

      <h1 className={styles.headline}>Albert</h1>
    </div>
  );
}

export default Logo;
