import Link from "next/link";
import React from "react";
import styles from "./Arrows.module.css";

export type ArrowProps = {
  backgroundColor: string;
  link: string;
};

function Arrow({ backgroundColor, link }: ArrowProps) {
  return (
    <Link href={link}>
      <svg
        className={styles.arrow}
        xmlns="http://www.w3.org/2000/svg"
        width="27.633"
        height="13.061"
        viewBox="0 0 27.633 13.061"
      >
        <path
          d="M19.364,14.416H.74a.726.726,0,0,0-.74.712v3.321a.726.726,0,0,0,.74.712H19.364v2.732A1.488,1.488,0,0,0,21.891,22.9l5.308-5.1a1.385,1.385,0,0,0,0-2.013l-5.308-5.1a1.488,1.488,0,0,0-2.527,1.007Z"
          transform="translate(0 -10.258)"
          fill={backgroundColor}
        />
      </svg>
    </Link>
  );
}

export default Arrow;
