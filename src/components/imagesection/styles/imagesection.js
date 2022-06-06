import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
import { colors } from "../../../constants/theme";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.bg};
  transition: 0.5s linear;

  display: flex;
  flex-direction: column;
`;

export const InfoContainerHover = styled(motion.div)`
  width: 60%;
  align-self: ${(props) => props.side};
  z-index: 10;
  overflow: hidden;
`;

export const InfoContainer = styled(motion.div)`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
`;

export const Image = styled(motion.img)`
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
`;

export const SubTitle = styled.div`
  font-family: "Roboto Mono", sans-serif;
  color: ${colors.lightGrey};
  font-size: 0.7rem;
  text-transform: uppercase;
`;
