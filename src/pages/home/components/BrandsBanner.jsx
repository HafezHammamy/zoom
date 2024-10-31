import { Box, Container } from "@mui/system";
import Carousel from "./Carousel";

import { useEffect, useState } from "react";
import { BRANDS } from "../contants";

import video1 from "assets/juvelook.mp4";
import video4 from "assets/ksugery.mp4";
import video2 from "assets/Lenisna.mp4";
import video3 from "assets/renee.mp4";
import BrandContainer from "./brands/BrandContainer";

const BrandsBanner = (props) => {
  const brands = [
    {
      title: BRANDS.JUVELOOK,
      subTitle: "Experience Juvelook",
      description: `Our unique PLA filler enhances your
    appearance with precision. Small PDLLA particles are injected into
    the dermis, evenly volumizing skin by boosting collagen
    production.`,
      video: video1,
    },
    {
      title: BRANDS.LENISNA,
      subTitle: "Experience LENISNA",
      description:
        "Our innovative spherical particles stimulate collagen production, offering natural volume for facial and body contouring. Ideal for wrinkle reduction and scar treatment.",
      video: video2,
    },
    {
      title: BRANDS.RENEE,
      subTitle: "Experience Renée",
      description:
        "Our injectable hyaluronic acid gels are meticulously crafted to hydrate and rejuvenate the skin, providing a refreshed and youthful appearance. With advanced formulations, Renée offers effective solutions for various aesthetic needs.",
      video: video3,
    },
    {
      title: BRANDS.KSURGERY,
      subTitle: "Experience Ksurgery",
      description:
        "Our Italian-made hyaluronic acid treatments blend cutting-edge technology with natural beauty enhancement. Ksurgery MED, by Vidapharma, delivers safe, effective, and scientifically-validated products, designed to meet the high standards of medical professionals in aesthetic care.",
      video: video4,
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(BRANDS.JUVELOOK);

  const brandList = [
    BRANDS.JUVELOOK,
    BRANDS.LENISNA,
    BRANDS.RENEE,
    BRANDS.KSURGERY,
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % brandList.length;
      setSelectedBrand(brandList[index]);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Box
      sx={{
        padding: 0,
        overflow: "hidden",
        filter: "grayscale(100%)",
        backgroundColor: "#000",
        height: "100vh",
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
          />
        )}
        {selectedBrand === BRANDS.JUVELOOK && (
          <BrandContainer
            title={brands[0].title}
            subTitle={brands[0].subTitle}
            description={brands[0].description}
            video={brands[0].video}
          />
        )}
        {selectedBrand === BRANDS.LENISNA && (
          <BrandContainer
            title={brands[1].title}
            subTitle={brands[1].subTitle}
            description={brands[1].description}
            video={brands[1].video}
          />
        )}
        {selectedBrand === BRANDS.RENEE && (
          <BrandContainer
            title={brands[2].title}
            subTitle={brands[2].subTitle}
            description={brands[2].description}
            video={brands[2].video}
          />
        )}
        <Carousel selectedBrand={setSelectedBrand} active={selectedBrand} />
      </Container>
    </Box>
  );
};

BrandsBanner.propTypes = {};

export default BrandsBanner;
