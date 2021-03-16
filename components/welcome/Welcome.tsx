import React from "react";
import styles from "./Welcome.module.css";
import Link from "next/link";

// export type LogoProps = {};
function Logo() {
  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>Meet</h1>
      <Link href="/">
        <a>
          <img src="/logo-albert.svg" />
        </a>
      </Link>
      <h1 className={styles.headline}>Albert</h1>
    </div>
  );
}

export default Logo;
