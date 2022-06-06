import { Footer } from "../components";

export default function FooterContainer({ children }) {
  return (
    <Footer>
      <Footer.EmailBox>
        <Footer.EmailText />
        <Footer.Email>design@fromluke.com</Footer.Email>
      </Footer.EmailBox>
      <Footer.FooterInfo>
        WORDS + IMAGES + CODE ©2022 LUKE MEYER
      </Footer.FooterInfo>
    </Footer>
  );
}
