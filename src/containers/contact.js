import { Contact } from "../components";

export default function ContactContainer({ children }) {
  return (
    <Contact>
      <Contact.ContactBox>
        <Contact.TitleLine>
          <Contact.Title>let's</Contact.Title>
          <Contact.SentenceChanger
            sentences={[
              "do lunch",
              "grab coffe",
              "work together",
              "talk design",
              "meet on zoom",
              "collaborate",
            ]}
          />
        </Contact.TitleLine>
        <Contact.EmailMeBox>Email-me</Contact.EmailMeBox>
      </Contact.ContactBox>
    </Contact>
  );
}
