import React from "react";
import styles from "./Canvas.module.css";
import { useEffect, useRef } from "react";

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    moveAlbert(context);
  }, []);

  return (
    <canvas
      className={styles.backgroundCanvas}
      ref={canvasRef}
      width="1920"
      height="1400"
    />
  );
}
export default Canvas;

const albert = { x: 1360, y: 250, width: 50, height: 10 };

function moveAlbert(context) {
  const image = new Image();
  image.src = "/Albert.svg";
  image.onload = () => {
    context.drawImage(image, albert.x, albert.y);
  };
  context.clearRect(0, 0, albert.width, albert.height);
  if (albert.x == albert.y) {
    albert.y += 10;
  } else if (albert.x === albert.y) {
    albert.y -= 10;
  } else if (albert.y === albert.x) {
    albert.x += 10;
  }
  // this moves Albert over map but dont stop him
  // albert.x += 0.3;
  // albert.y += 2;
  context.clearRect(0, 0, albert.width, albert.height);
  requestAnimationFrame(() => moveAlbert(context));
}
