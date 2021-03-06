import styles from "./Canvas.module.css";
import { MutableRefObject, useEffect, useRef } from "react";
import moveAlbert from "../canvas/move";
import useLocalStorage from "../../hook/hook";
import Button from "../button/Button";

function Canvas() {
  const albertDownRef = useRef(null);
  const albertUpRef = useRef(null);
  const albertLeftRef = useRef(null);
  const albertRightRef = useRef(null);
  const { x, y, isdirection, move } = moveAlbert();
  const [name, setName] = useLocalStorage<string>("name", null);

  useEffect(() => {
    if (!name) {
      setName("friend");
    } else {
      return;
    }
  }, []);

  const canvasRef = useRef(null);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;

    function handleResize() {
      const canvas = document.querySelector("canvas");
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let albertRef: MutableRefObject<string>;
    if (isdirection === "up") albertRef = albertUpRef;
    if (isdirection === "left") albertRef = albertLeftRef;
    if (isdirection === "right") albertRef = albertRightRef;
    if (isdirection === "down") albertRef = albertDownRef;
    context.drawImage(albertRef.current, x, y);
  }, [x, y]);

  return (
    <div>
      <p className={styles.text}>
        Hello {name}!<br /> You can type on the direction buttons and navigate
        me to the blue points or tap on <span>GO!</span> to start with the first
        city!
        <br /> On small device scroll to the right side!
        <br />
        <Button label="GO!" link={"/citypage/"} primary />
      </p>
      <canvas className={styles.backgroundCanvas} ref={canvasRef} z-index="1" />

      <div className={styles.btn}>
        <button onClick={() => move("up")}>Up</button>
        <button onClick={() => move("left")}>Left</button>
        <button onClick={() => move("down")}>Down</button>
        <button onClick={() => move("right")}>Right</button>
      </div>
      <div className={styles.img}>
        <img src="/images/up.svg" ref={albertUpRef} alt="up" />
        <img src="/images/left.svg" ref={albertLeftRef} alt="left" />
        <img src="/images/right.svg" ref={albertRightRef} alt="right" />
        <img src="/images/Albert.svg" ref={albertDownRef} alt="down" />
      </div>
    </div>
  );
}
export default Canvas;
