import styles from "./Animalcard.module.css";

export type AnimalCardProps = {
  _id?: string;
  name: string;
  ImgSrc: string;
  description: string;
  audioFile: string;
};

function AnimalCard({ name, ImgSrc, description, audioFile }: AnimalCardProps) {
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
