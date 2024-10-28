import { Box, Container } from "@mui/system";
import Carousel from "./Carousel";

import KsurgeryBrand from "./brands/KsurgeryBrand";
import { useState } from "react";
import { BRANDS } from "../contants";
import JuvelookBrand from "./brands/JuvelookBrand";
import LenisnaBrand from "./brands/LenisnaBrand";
import ReneeBrand from "./brands/ReneeBrand";

const BrandsBanner = (props) => {
  const [selectedBrand, setSelectedBrand] = useState(BRANDS.JUVELOOK);
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        background: "linear-gradient(145deg, #ff77a9, #d3577f)",
        padding: 0,
        overflow: "hidden",
        height: "90vh",
        filter: "grayscale(100%)",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100%",
          padding: "0 !important",
          margin: 0,
          paddingBottom: "150px",
        }}
      >
        {selectedBrand === BRANDS.KSIRGERY && <KsurgeryBrand />}
        {selectedBrand === BRANDS.JUVELOOK && <JuvelookBrand />}
        {selectedBrand === BRANDS.LENISNA && <LenisnaBrand />}
        {selectedBrand === BRANDS.RENEE && <ReneeBrand />}

        <Carousel selectedBrand={setSelectedBrand} />
      </Container>
    </Box>
  );
};

BrandsBanner.propTypes = {};

export default BrandsBanner;
