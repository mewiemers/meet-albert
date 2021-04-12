import React from "react";
import styles from "./Citypage.module.css";
import Link from "next/link";

export type CityProps = {
  link: string;
};
function Citypage({ link }: CityProps) {
  return (
    <div className={styles.background}>
      <img className={styles.speechbubble} src="/images/bubble-albert.svg" />
      <img className={styles.imgalbert} src="/images/Albert.svg" />
      <Link href={link}>
        <img className={styles.imgkookie} src="/images/kookie.svg" />
      </Link>
    </div>
  );
}

export default Citypage;
