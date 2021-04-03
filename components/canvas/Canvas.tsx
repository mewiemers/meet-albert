import styles from "./Canvas.module.css";
import { useEffect, useRef } from "react";
import moveAlbert from "../canvas/move";

function Canvas() {
  const albertDownRef = useRef(null);
  const albertUpRef = useRef(null);
  const albertLeftRef = useRef(null);
  const albertRightRef = useRef(null);
  const { x, y, isdirection, move } = moveAlbert();

  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let albertRef;
    if (isdirection === "up") albertRef = albertUpRef;
    if (isdirection === "left") albertRef = albertLeftRef;
    if (isdirection === "right") albertRef = albertRightRef;
    if (isdirection === "down") albertRef = albertDownRef;
    context.drawImage(albertRef.current, x, y);
  }, [x, y]);

  const name = localStorage.getItem("name");

  return (
    <div className={styles.containerMap}>
      <main className={styles.main}>
        <p className={styles.text}>
          Hello {name}! you can type on the button and navigate me to the blue
          points or tap on Brisbane to start with the first city!
        </p>

        <canvas
          className={styles.backgroundCanvas}
          ref={canvasRef}
          z-index="1"
        />

        <div className={styles.btn}>
          <button onClick={() => move("up")}>Up</button>
          <button onClick={() => move("left")}>Left</button>
          <button onClick={() => move("down")}>Down</button>
          <button onClick={() => move("right")}>Right</button>
        </div>
        <div className={styles.img}>
          <img src="/up.svg" ref={albertUpRef} alt="up" />
          <img src="/left.svg" ref={albertLeftRef} alt="left" />
          <img src="/right.svg" ref={albertRightRef} alt="right" />
          <img src="/Albert.svg" ref={albertDownRef} alt="down" />
        </div>
      </main>
    </div>
  );
}
export default Canvas;
