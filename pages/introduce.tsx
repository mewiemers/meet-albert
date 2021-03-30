import React from "react";
import Button from "../components/button/Button";
import Canvas from "../components/canvas/Canvas";

function Introduce() {
  return (
    <>
      <Button label="YES!" link={"/citypage/"} primary />
      <Canvas />
    </>
  );
}

export default Introduce;
