import { useEffect, useState } from "react";

export default function moveAlbert() {
  const [x, setX] = useState(1360);
  const [y, setY] = useState(250);
  const [isdirection, setIsDirection] = useState("down");

  useEffect(() => {
    if (x >= 1590 && x <= 1610 && y >= 640 && y <= 680) {
      location.href = "/";
    }
  }, [x, y]);

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
    if (direction === "up") setY((y) => y - 20);
    if (direction === "left") setX((x) => x - 20);
    if (direction === "right") setX((x) => x + 20);
    if (direction === "down") setY((y) => y + 20);
  }
  return { x, y, isdirection, move };
}
