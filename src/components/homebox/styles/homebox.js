import styled from "styled-components";
import { colors } from "../../../constants/theme";
import { motion } from "framer-motion/dist/framer-motion";

export const Container = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;

  background-color: ${(props) => props.bg};
  transition: 0.5s linear;
`;

export const Left = styled.div`
  height: 100%;
  width: 60%;
  position: relative;
`;

export const Right = styled.div`
  height: 100%;
  width: 40%;
  position: relative;
`;

export const RightText = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  text-transform: uppercase;
  font-family: "Roboto Mono", sans-serif;
  font-size: 0.7rem;
  color: ${colors.lightGrey};
`;

export const LeftTextWrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const LeftTextLineWrapper = styled.div`
  overflow: hidden;
  display: inline;
`;

export const LeftTextLine = styled(motion.span)`
  text-transform: uppercase;
  font-family: "Viga", sans-serif;
  font-size: 7rem;
  line-height: 7rem;
  position: relative;
`;
