import styled from "styled-components";
import TextLoop from "react-text-loop";
import { motion } from "framer-motion/dist/framer-motion";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.bg};
  transition: 0.5s linear;
  display: flex;
  flex-direction: column;
`;

export const ContactBox = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
`;

export const TitleLine = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-family: "Viga", sans-serif;
  font-size: 5rem;
  line-height: 5rem;
`;

export const SentenceHolder = styled.div`
  margin-left: 15px;
  overflow: hidden;
`;

export const Sentence = styled(TextLoop)`
  text-transform: uppercase;
  font-family: "Viga", sans-serif;
  font-size: 5rem;
  line-height: 5rem;
`;

export const EmailMeBox = styled(motion.div)`
  margin-top: 50px;
  height: 175px;
  width: 175px;
  background-color: black;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Roboto Mono", sans-serif;
  text-transform: uppercase;
  font-size: 0.75rem;
`;
