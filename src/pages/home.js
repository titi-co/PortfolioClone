import { brands } from "../constants/fixtures";
import {
  HomeBoxContainer,
  ImageSectionContainer,
  ContactContainer,
  FooterContainer,
} from "../containers";
import Menu from "../menu/menu";

export default function Home() {
  return (
    <>
      <HomeBoxContainer />
      {brands.map((brand, index) => {
        return (
          <ImageSectionContainer brand={brand} key={index + "-" + brand.name} />
        );
      })}
      <ContactContainer />
      <FooterContainer />
      <Menu />
    </>
  );
}
