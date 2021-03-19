import { useState } from "react";
import styles from "./Input.module.css";

const [name, setName] = useState("");

export default function Input() {
  return (
    <>
      <input
        value={name}
        className={styles.input}
        type="text"
        placeholder="your name"
        onChange={(event) => setName(event.target.value)}
      ></input>
    </>
  );
}
