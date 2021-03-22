import React from "react";
import styles from "./Canvas.module.css";
import { useEffect, useRef } from "react";

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = "/Albert.svg";
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
  }, []);

  return (
    <canvas
      className={styles.backgroundcanvas}
      ref={canvasRef}
      width="1920"
      height="1400"
    />
  );
}
export default Canvas;
