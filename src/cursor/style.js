import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import icon from "./arrow.png";

export const Cursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 16px;
  background-color: white;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 10;

  mask-image: ${(props) => (props.cursor ? `url(${icon})` : null)};
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
`;
