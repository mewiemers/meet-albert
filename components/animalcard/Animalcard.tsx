import styles from "./Animalcard.module.css";
import { Animal } from "../../utils/type";

export type AnimalProps = {
  animals: Animal;
};

function AnimalCard({ animals }: AnimalProps) {
  return (
    <div>
      <h1></h1>
      <div>
        <img src={animals.ImgSrc} />
        <p></p>
      </div>
      <audio controls src={animals.audioFile}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
}

export default AnimalCard;
