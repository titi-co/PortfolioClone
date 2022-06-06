import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import * as ROUTES from "./constants/routes";
import CustomCursor from "./cursor/cursor";
import { Home } from "./pages";
import bgContext from "./contexts/backgroundContext";
import cursorContext from "./contexts/cursorContext";
import secondCursorContext from "./contexts/secondCursorContext";
import loadingContext from "./contexts/loadingContext";
import Loading from "./loading/loading";
import Logo from "./logo/logo";

function App() {
  const [color, setColor] = useState("white");
  const [active, setActive] = useState(false);
  const [cursor2, setCursor2] = useState(false);
  const [loadingState, setLoading] = useState("initial");
  return (
    <>
      <loadingContext.Provider value={{ loadingState, setLoading }}>
        <secondCursorContext.Provider value={{ cursor2, setCursor2 }}>
          <cursorContext.Provider value={{ active, setActive }}>
            <bgContext.Provider value={{ color, setColor }}>
              <Router>
                <Routes>
                  <Route path={ROUTES.Home} element={<Home />} />
                </Routes>
              </Router>
              <CustomCursor />
              <Loading />
              <Logo />
            </bgContext.Provider>
          </cursorContext.Provider>
        </secondCursorContext.Provider>
      </loadingContext.Provider>
    </>
  );
}

export default App;
