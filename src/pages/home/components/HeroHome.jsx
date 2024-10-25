import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

import video from "assets/our_brands.mp4";

const heroTextStyle = {
  paddingBottom: 0,
  display: "block",
  position: "absolute",
  bottom: "80px",
  left: "90px",
  right: "90px",
  height: "auto",
  textAlign: "left",
  color: "#fff",
};

const heroButton = {
  color: "white",
  borderColor: "white",
  height: "65px",
  width: "281px",
  "&:hover": {
    borderColor: "white",
    color: "#ab92e1",
    backgroundColor: "white",
  },
};

const videoStyle = {
  position: "absolute",
  right: 0,
  bottom: 0,
  minWidth: "100%",
  minHeight: "100%",
};

export const HomeHero = () => {
  const { t } = useTranslation();
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
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100%",
          padding: "0 !important",
          margin: 0,
        }}
      >
        <video autoPlay loop muted playsInline style={{ videoStyle }}>
          <source src={video} type="video/mp4" />
        </video>

        <Box maxWidth="xl" sx={heroTextStyle}>
          <Box sx={{ width: "50%" }}>
            <Stack spacing={3}>
              <StyledTypography variant="h2">
                {t(tokens.common.discover_brands.title)}
              </StyledTypography>
              <StyledTypography variant="h2">
                {t(tokens.common.discover_brands.summary)}
              </StyledTypography>
              <Box>
                <Button sx={heroButton} size="large" variant="outlined">
                  Read More
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
