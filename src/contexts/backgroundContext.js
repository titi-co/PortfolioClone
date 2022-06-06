import { createContext } from "react";

const bgContext = createContext({
  color: "white",
  setActive: (color) => {},
});

export default bgContext;
