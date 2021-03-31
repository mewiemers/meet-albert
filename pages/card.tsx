import React, { useEffect, useState } from "react";
import AnimalCard from "../components/animalcard/Animalcard";
import { Animal } from "../utils/api";

function Card() {
  const [animalInfo, setAnimalInfo] = useState<Animal[]>();

  useEffect(() => {
    fetch("/api/animalsinfo")
      .then((response) => response.json())
      .then(setAnimalInfo);
  }, []);

  if (!animalInfo) {
    return <div>is noch nicht so weit..bitte warten...</div>;
  }
  const infocard = animalInfo.map((info) => (
    <AnimalCard
      key={info._id}
      ImgSrc={info.ImgSrc}
      audioFile={info.audioFile}
      description={info.description}
      name={info.name}
    />
  ));

  return <div>{infocard}</div>;
}

export default Card;
