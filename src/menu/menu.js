import { MenuContainer } from "./style";
import { MenuAlt4 } from "@styled-icons/heroicons-outline";
import { useState, useContext } from "react";
import cursorContext from "../contexts/cursorContext";

function Menu() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { setActive } = useContext(cursorContext);
  return (
    <>
      <MenuContainer
        animate={{ rotate: isActive ? 180 : 0 }}
        onHoverStart={() => {
          console.log("Menu Hover!");
          setIsActive(true);
          setActive(true);
        }}
        onHoverEnd={() => {
          console.log("Menu Hover End!");
          setIsActive(false);
          setActive(false);
        }}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <MenuAlt4 style={{ height: 25 }} />
      </MenuContainer>
    </>
  );
}

export default Menu;
