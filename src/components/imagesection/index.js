import { useAnimation } from "framer-motion/dist/framer-motion";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bgContext from "../../contexts/backgroundContext";
import cursorContext from "../../contexts/cursorContext";
import secondCursorContext from "../../contexts/secondCursorContext";
import {
  Container,
  InfoContainer,
  Image,
  Title,
  SubTitle,
  InfoContainerHover,
  ImageWrapper,
} from "./styles/imagesection";

export default function ImageSection({ children, ...restProps }) {
  const { color } = useContext(bgContext);
  return (
    <Container className="container-fluid" bg={color}>
      {children}
    </Container>
  );
}

ImageSection.InfoContainer = function ImageSectionInfoContainer({
  children,
  side,
  color,
}) {
  const { setColor } = useContext(bgContext);
  const { setActive } = useContext(cursorContext);
  const { setCursor2 } = useContext(secondCursorContext);

  const handleColor = (color, active) => {
    setColor(color);
    setActive(active);
    setCursor2(active);
  };

  const fadeIn = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <InfoContainerHover
      side={side}
      onHoverStart={() => {
        console.log("Hover!");
        handleColor(color, true);
      }}
      onHoverEnd={() => {
        console.log("Leaving Hover!");
        handleColor("white", false);
      }}
    >
      <InfoContainer
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        ref={ref}
      >
        {children}
      </InfoContainer>
    </InfoContainerHover>
  );
};

ImageSection.Image = function ImageSectionImage({ _color, ...restProps }) {
  const { color } = useContext(bgContext);
  console.log(_color);
  return (
    <ImageWrapper>
      <Image
        animate={color === _color ? { scale: 1.05 } : { scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        {...restProps}
      />
    </ImageWrapper>
  );
};

ImageSection.Title = function ImageSectionTitle({ children }) {
  return <Title>{children}</Title>;
};

ImageSection.SubTitle = function ImageSectionSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};
