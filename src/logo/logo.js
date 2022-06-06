import { useContext } from "react";
import cursorContext from "../contexts/cursorContext";
import loadingContext from "../contexts/loadingContext";
import { LogoContainer, LogoText } from "./style";

function Logo() {
  const { setActive } = useContext(cursorContext);
  const { setLoading } = useContext(loadingContext);
  return (
    <LogoContainer
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setLoading("initial")}
    >
      <LogoText>
        lu
        <br />
        ke
      </LogoText>
    </LogoContainer>
  );
}

export default Logo;
