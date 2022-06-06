import { ImageSection } from "../components";

export default function ImageSectionContainer({ brand }) {
  return (
    <ImageSection>
      <ImageSection.InfoContainer side={brand.side} color={brand.color}>
        <ImageSection.Image
          src={process.env.PUBLIC_URL + brand.image}
          _color={brand.color}
        />
        <ImageSection.Title>{brand.title}</ImageSection.Title>
        <ImageSection.SubTitle>{brand.subTitle}</ImageSection.SubTitle>
      </ImageSection.InfoContainer>
    </ImageSection>
  );
}
