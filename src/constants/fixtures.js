import { colors } from "./theme";

export const brands = [
  {
    color: colors.yellow,
    title: "Scotch",
    subTitle: "branding + packaging + website",
    image: "/assets/sectionA.jpeg",
    side: "flex-end",
  },
  {
    color: colors.red,
    title: "Vurve",
    subTitle: "brand design + naming + website",
    image: process.env.PUBLIC_URL + "/assets/sectionB.jpeg",
    side: "flex-start",
  },
  {
    color: colors.lightBlue,
    title: "Frusea",
    subTitle: "brand design + naming + packaging",
    image: process.env.PUBLIC_URL + "/assets/sectionC.jpeg",
    side: "flex-end",
  },
];
