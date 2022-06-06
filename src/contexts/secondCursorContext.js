import { createContext } from "react";

const secondCursorContext = createContext({
  active: false,
  setColor: (active) => {},
});

export default secondCursorContext;
