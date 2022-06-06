import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 25px;
  right: 25px;

  background-color: white;
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 2;
`;
