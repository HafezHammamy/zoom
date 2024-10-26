import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import { Box, Container } from "@mui/system";

const BrandsBanner = (props) => {
  return (
    <Box
      sx={{
        height: "672px",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100%",
          margin: 0,
        }}
      >
        <Box maxWidth="xxl">
          <Carousel />
        </Box>
      </Container>
    </Box>
  );
};

BrandsBanner.propTypes = {};

export default BrandsBanner;
