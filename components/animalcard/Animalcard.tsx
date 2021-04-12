import { Animal } from "../../utils/api";
import styles from "./Animalcard.module.css";
import Link from "next/link";

export type AnimalPreview = Pick<
  Animal,
  "name" | "ImgSrc" | "audioFile" | "description"
>;

function AnimalCard({ name, ImgSrc, description, audioFile }: AnimalPreview) {
  return (
    <div className={styles.background}>
      <h1 className={styles.headline}>{name}</h1>
      <img className={styles.img} src={ImgSrc} />
      <p className={styles.textbox}>{description}</p>
      <audio className={styles.audio} controls src={audioFile}></audio>
      <Link href={"/goodbye"}>
        <img className={styles.arrow} src="/images/brownarrow.svg" />
      </Link>
    </div>
  );
}

export default AnimalCard;
