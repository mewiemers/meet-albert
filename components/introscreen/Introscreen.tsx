import React from "react";
import styles from "./Introscreen.module.css";
import Button from "../button/Button";

function Introscreen() {
  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>Welcome to Australia </h1>
      <div className={styles.box}>
        <p>
          Many animals live on this wonderful place and Albert,the platypus is
          one of them.
        </p>
        <p>
          {" "}
          Playing is very easy, just use your arrow keys or tap on the blue
          Points to navigate Albert through the cities.
        </p>
        <br />
        <p> So lets meet Albert and discover the continent.</p>
        <Button label="Traveling" />
      </div>

      <img className={styles.img} src="/australia-map.jpg" />
    </div>
  );
}

export default Introscreen;
