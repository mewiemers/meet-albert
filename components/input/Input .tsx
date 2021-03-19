import { useState } from "react";
import styles from "./Input.module.css";

export default function Input() {
  const [name, setName] = useState("");

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
