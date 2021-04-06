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
    return <div>kookie is flying to you....</div>;
  }
  const infocard = animalInfo.map(
    ({ _id, ImgSrc, audioFile, description, name }: Animal) => (
      <AnimalCard
        key={_id}
        ImgSrc={ImgSrc}
        audioFile={audioFile}
        description={description}
        name={name}
      />
    )
  );

  return (
    <>
      <div>{infocard}</div>
    </>
  );
}

export default Card;
