import { Animal } from "../../utils/api";
import styles from "./Animalcard.module.css";

export type AnimalPreview = Pick<
  Animal,
  "name" | "ImgSrc" | "audioFile" | "description"
>;

function AnimalCard({ name, ImgSrc, description, audioFile }: AnimalPreview) {
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
