import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  background-color: ${(props) => props.bg};
  transition: 0.5s linear;
`;

export const Row = styled.div`
  padding: 25px 0px 25px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmailBox = styled(motion.div)``;

export const EmailTextChanger = styled.div``;

export const Email = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5px;
`;

export const EmailLine = styled(motion.div)`
  height: 2px;
  background-color: black;
`;

export const FooterInfo = styled.div`
  text-transform: uppercase;
  font-family: "Roboto Mono", sans-serif;
  font-size: 0.7rem;
  color: black;
  font-weight: 500;
`;
