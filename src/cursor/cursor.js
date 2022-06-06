import { Cursor } from "./style";
import { useMotionValue } from "framer-motion/dist/framer-motion";
import { useEffect, useContext } from "react";
import cursorContext from "../contexts/cursorContext";
import secondCursorContext from "../contexts/secondCursorContext";

function CustomCursor() {
  const { active } = useContext(cursorContext);
  const { cursor2 } = useContext(secondCursorContext);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <Cursor
      cursor={cursor2}
      animate={active ? { scale: 3 } : { scale: 1 }}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
}

export default CustomCursor;
