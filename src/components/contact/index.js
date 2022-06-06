import { useContext, useState, useEffect } from "react";
import bgContext from "../../contexts/backgroundContext";
import cursorContext from "../../contexts/cursorContext";
import { ArrowRight } from "@styled-icons/heroicons-outline";
import {
  ContactBox,
  Container,
  Sentence,
  SentenceHolder,
  Title,
  TitleLine,
  EmailMeBox,
} from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  const { color } = useContext(bgContext);
  return (
    <Container className="container-fluid" bg={color}>
      {children}
    </Container>
  );
}

Contact.TitleLine = function ContactTitleLine({ children }) {
  return <TitleLine>{children}</TitleLine>;
};

Contact.ContactBox = function ContactContactBox({ children }) {
  return <ContactBox>{children}</ContactBox>;
};

Contact.Title = function ContactTitle({ children }) {
  return <Title>{children}</Title>;
};

Contact.SentenceChanger = function ContactSentenceChanger({ sentences }) {
  return (
    <SentenceHolder>
      <Sentence children={sentences} />
    </SentenceHolder>
  );
};

Contact.EmailMeBox = function ContactEmailMeBox({ children }) {
  const { setActive } = useContext(cursorContext);

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
  };

  const { x, y } = useMousePosition();

  const [inHoverRegion, setInHoverRegion] = useState(false);
  const hasMovedCursor = typeof x === "number" && typeof y === "number";

  const shouldTransform = inHoverRegion && hasMovedCursor;
  const xs = shouldTransform ? x * 0.05 : 0;
  const ys = shouldTransform ? y * 0.05 : 0;

  return (
    <EmailMeBox
      animate={{
        x: xs,
        y: ys,
      }}
      onHoverStart={() => {
        setInHoverRegion(true);
        setActive(true);
      }}
      onHoverEnd={() => {
        setInHoverRegion(false);
        setActive(false);
      }}
      whileHover={() => {
        console.log("Hovering!");
      }}
    >
      {children}
      <ArrowRight style={{ height: 15, marginLeft: 15 }} />
    </EmailMeBox>
  );
};
