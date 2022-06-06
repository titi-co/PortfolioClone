import { createContext } from "react";

const cursorContext = createContext({
  active: false,
  setColor: (active) => {},
});

export default cursorContext;
