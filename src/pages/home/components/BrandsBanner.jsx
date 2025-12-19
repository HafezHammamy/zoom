import { Box, Container } from "@mui/system";
import Carousel from "./Carousel";

import { useState } from "react";
import { BRANDS } from "../contants";

import video1 from "assets/juvelook.mov";
import video4 from "assets/ksugery1.mp4";
import video2 from "assets/lenisna.mov";
import video3 from "assets/renee1.mp4";
import BrandContainer from "./brands/BrandContainer";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";
import { paths } from "paths";

const BrandsBanner = (props) => {
  const { t } = useTranslation();
  const brands = [
    {
      title: t(tokens.brands.juvelook.title),
      subTitle: t(tokens.brands.juvelook.subtitle),
      description: t(tokens.brands.juvelook.description),
      video: video1,
      path: paths.brands.juvelook,
    },
    {
      title: t(tokens.brands.lenisna.title),
      subTitle: t(tokens.brands.lenisna.subtitle),
      description: t(tokens.brands.lenisna.description),
      video: video2,
      path: paths.brands.lenisna,
    },
    {
      title: t(tokens.brands.renee.title),
      subTitle: t(tokens.brands.renee.subtitle),
      description: t(tokens.brands.renee.description),
      video: video3,
      path: paths.brands.renee,
    },
    {
      title: t(tokens.brands.ksurgery.title),
      subTitle: t(tokens.brands.ksurgery.subtitle),
      description: t(tokens.brands.ksurgery.description),
      video: video4,
      path: paths.brands.ksurgery,
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(BRANDS.JUVELOOK);

  return (
    <Box
      sx={{
        padding: 0,
        overflow: "hidden",
        filter: "grayscale(100%)",
        backgroundColor: "#000",
        height: { xs: "35rem", md: "50rem" },
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          margin: 0,
          height: "100%",
        }}
      >
        {selectedBrand === BRANDS.KSURGERY && (
          <BrandContainer
            title={brands[3].title}
            subTitle={brands[3].subTitle}
            description={brands[3].description}
            video={brands[3].video}
            path={brands[3].path}
          />
        )}
        {selectedBrand === BRANDS.JUVELOOK && (
          <BrandContainer
            title={brands[0].title}
            subTitle={brands[0].subTitle}
            description={brands[0].description}
            video={brands[0].video}
            path={brands[0].path}
          />
        )}
        {selectedBrand === BRANDS.LENISNA && (
          <BrandContainer
            title={brands[1].title}
            subTitle={brands[1].subTitle}
            description={brands[1].description}
            video={brands[1].video}
            path={brands[1].path}
          />
        )}
        {selectedBrand === BRANDS.RENEE && (
          <BrandContainer
            title={brands[2].title}
            subTitle={brands[2].subTitle}
            description={brands[2].description}
            video={brands[2].video}
            path={brands[2].path}
          />
        )}
        <Carousel selectedBrand={setSelectedBrand} active={selectedBrand} />
      </Container>
    </Box>
  );
};

BrandsBanner.propTypes = {};

export default BrandsBanner;
