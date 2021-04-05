import React from "react";
import Button from "../components/button/Button";
import Canvas from "../components/canvas/Canvas";

function Introduce() {
  return (
    <>
      <Button label="GO!" link={"/citypage/"} primary />
      <Canvas />
    </>
  );
}

export default Introduce;
