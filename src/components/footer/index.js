import { useContext, useState } from "react";
import bgContext from "../../contexts/backgroundContext";
import {
  Container,
  Email,
  EmailBox,
  EmailLine,
  EmailTextChanger,
  FooterInfo,
  Row,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  const { color } = useContext(bgContext);
  return (
    <Container className="container-fluid" bg={color}>
      <Row>{children}</Row>
    </Container>
  );
}

Footer.EmailBox = function FooterEmailBox({ children }) {
  const [hover, setHover] = useState(false);
  return (
    <EmailBox
      onHoverStart={() => {
        setHover(true);
        console.log("Hover Footer!");
      }}
      onHoverEnd={() => {
        setHover(false);
        console.log("Hover Footer End!");
      }}
    >
      {children}
      <EmailLine
        animate={hover ? { width: "100%" } : { width: "0%" }}
        transition={{ type: "linear" }}
      />
    </EmailBox>
  );
};

Footer.EmailText = function FooterEmailText({ children }) {
  return <EmailTextChanger>{children}</EmailTextChanger>;
};

Footer.Email = function FooterEmail({ children }) {
  return <Email>{children}</Email>;
};

Footer.EmailLine = function FooterEmailLine({ children }) {
  return <EmailLine>{children}</EmailLine>;
};

Footer.FooterInfo = function FooterFooterInfo({ children }) {
  return <FooterInfo>{children}</FooterInfo>;
};
