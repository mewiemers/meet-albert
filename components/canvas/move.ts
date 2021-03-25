import { useEffect, useState } from "react";

export default function moveAlbert() {
  const [x, setX] = useState(1360);
  const [y, setY] = useState(250);
  const [isdirection, setIsDirection] = useState("down");

  useEffect(() => {
    window.addEventListener("key", handleKey);

    function handleKey(e) {
      if (e.key === "UP") move("up");
      if (e.key === "LEFT") move("left");
      if (e.key === "RIGHT") move("right");
      if (e.key === "DOWN") move("down");
    }
    return () => window.removeEventListener("key", handleKey);
  }, []);
  function move(direction) {
    setIsDirection(direction);
    if (direction === "up") setY((y) => y - 10);
    if (direction === "left") setX((x) => x - 10);
    if (direction === "right") setX((x) => x + 10);
    if (direction === "down") setY((y) => y + 10);
  }
  return { x, y, isdirection, move };
}
