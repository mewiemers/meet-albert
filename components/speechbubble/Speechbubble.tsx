import styles from "./Speechbubble.module.css";

export default function Speechbubble() {
  return (
    <>
      <div className={styles.bubble}>
        <p className={styles.text}>
          Hello (Name)! Nice to meet you! I am Albert and i love to travel!
          Would you come along with me through Australia?
        </p>
      </div>
    </>
  );
}
