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

  return (
    <>
      <input className={styles.input} type="button" value="test" />
      <canvas className={styles.backgroundCanvas} ref={canvasRef} z-index="1" />

      <div>
        <button className={styles.btnup} onClick={() => move("up")}>
          Up
        </button>
        <button className={styles.btnleft} onClick={() => move("left")}>
          Left
        </button>
        <button className={styles.btndown} onClick={() => move("down")}>
          Down
        </button>
        <button className={styles.btnright} onClick={() => move("right")}>
          Right
        </button>
      </div>
      <div>
        <img src="/up.svg" className={styles.img} ref={albertUpRef} alt="up" />
        <img
          src="/left.svg"
          className={styles.img}
          ref={albertLeftRef}
          alt="left"
        />
        <img
          src="/right.svg"
          className={styles.img}
          ref={albertRightRef}
          alt="right"
        />
        <img
          src="/Albert.svg"
          className={styles.img}
          ref={albertDownRef}
          alt="down"
        />
      </div>
    </>
  );
}
export default Canvas;
