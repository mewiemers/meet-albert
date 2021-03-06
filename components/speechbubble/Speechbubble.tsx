import styles from "./Speechbubble.module.css";

export default function Speechbubble() {
  return (
    <>
      <div className={styles.bubble} z-index="2">
        <p className={styles.text}>
          Hello (Name)! Nice to meet you! I am Albert and I love to travel!
          Would you like to come along with me through Australia?
        </p>
      </div>
    </>
  );
}
