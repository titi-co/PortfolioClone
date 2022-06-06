import { HomeBox } from "../components";

export default function HomeBoxContainer({ children }) {
  return (
    <HomeBox>
      <HomeBox.Left>
        <HomeBox.LeftText line1="hi, i'm" line2="luke meyer*" />
      </HomeBox.Left>
      <HomeBox.Right>
        <HomeBox.RightText>
          * actually, i'm a website
          <br />
          but i was built by luke meyer.
        </HomeBox.RightText>
      </HomeBox.Right>
    </HomeBox>
  );
}
