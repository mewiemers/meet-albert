import React from "react";
import styles from "./Canvas.module.css";

// let canvas=document.getElementById("canvas")
// let ctx=canvas.getContext("2d")

function Canvas() {
  return (
    <>
      <div className={styles.containermap}>
        <img src="/Albert.svg" />
        <canvas
          className={styles.backgroundcanvas}
          width="1920"
          height="1400"
        ></canvas>
      </div>
    </>
  );
}

export default Canvas;
