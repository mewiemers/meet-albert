import React from "react";
import styles from "./Loginscreen.module.css";
import Input from "../input/Input ";
import Button from "../button/Button";

function Logo() {
  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>Meet Albert</h1>
      <Input />
      <Button label="Discover" link={"/introduce"} />
    </div>
  );
}

export default Logo;
