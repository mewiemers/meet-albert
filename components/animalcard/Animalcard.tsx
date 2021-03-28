import styles from "./Animalcard.module.css";
import { Animal } from "../../utils/type";

function AnimalCard({ name, ImgSrc, description, audioFile }: Animal) {
  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>{name}</h1>
      <img src={ImgSrc} />
      <p className={styles.textbox}>{description}</p>
      <audio controls src={audioFile}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}

export default AnimalCard;
