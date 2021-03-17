import React from "react";
import styles from "./Welcome.module.css";

function Logo() {
  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>
        Meet
        <a href="/">
          <img src="/logo-albert.svg" />
        </a>
        Albert
      </h1>
    </div>
  );
}

export default Logo;
