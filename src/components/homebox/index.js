import { useContext } from "react";
import bgContext from "../../contexts/backgroundContext";
import {
  Container,
  Left,
  LeftTextLine,
  LeftTextLineWrapper,
  LeftTextWrapper,
  Right,
  RightText,
} from "./styles/homebox";

export default function HomeBox({ children, ...restProps }) {
  const { color } = useContext(bgContext);
  return (
    <Container className="container-fluid" bg={color}>
      {children}
    </Container>
  );
}

HomeBox.Left = function HomeBoxLeft({ children }) {
  return <Left>{children}</Left>;
};

HomeBox.Right = function HomeBoxRight({ children }) {
  return <Right>{children}</Right>;
};

HomeBox.RightText = function HomeBoxRightText({ children }) {
  return <RightText>{children}</RightText>;
};

HomeBox.LeftText = function HomeBoxLeftText({ ...restProps }) {
  const line1 = restProps.line1;
  const line2 = restProps.line2;
  const line = {
    hidden: {},
    visible: {
      transition: {
        delay: 0.5,
        staggerChildren: 0.025,
      },
    },
  };

  const letter = {
    hidden: {
      top: 150,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      top: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.75 },
    },
  };
  return (
    <LeftTextWrapper variants={line} initial="hidden" animate="visible">
      {line1.split("").map((char, index) => {
        return (
          <LeftTextLineWrapper key={index + "-" + char}>
            <LeftTextLine variants={letter}>{char}</LeftTextLine>
          </LeftTextLineWrapper>
        );
      })}
      <br />

      {line2.split("").map((char, index) => {
        return (
          <LeftTextLineWrapper key={index + "-" + char}>
            <LeftTextLine variants={letter}>{char}</LeftTextLine>
          </LeftTextLineWrapper>
        );
      })}
    </LeftTextWrapper>
  );
};
