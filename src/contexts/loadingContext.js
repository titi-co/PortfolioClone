import { createContext } from "react";

const loadingContext = createContext({
  active: "initial",
  setLoading: (state) => {},
});

export default loadingContext;
