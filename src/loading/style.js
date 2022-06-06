import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const LoadingContainer = styled(motion.div)`
  height: 100vh;
  width: 100vw;

  background-color: black;

  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
