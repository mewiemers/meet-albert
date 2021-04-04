import styles from "./Input.module.css";
import useLocalStorage from "../../hook/hook";

export default function Input() {
  const [username, setUsername] = useLocalStorage("name", null);

  return (
    <>
      <input
        value={username}
        className={styles.input}
        type="text"
        placeholder="your name"
        onChange={(event) => setUsername(event.target.value)}
      ></input>
    </>
  );
}
