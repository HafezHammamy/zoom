import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import video from "assets/our_brands.mp4";

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

const heroTextStyle = {
  color: "#fff",
  width: "50%",
};

const videoStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  transform: "translate(-50%, -50%)",
  zIndex: -1,
  objectFit: "cover",
};

export const HomeHero = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, marginTop: "45vh" }}
          >
            <Stack spacing={3} sx={heroTextStyle}>
              <StyledTypography variant="h2">
                {t(tokens.common.discover_brands.title)}
              </StyledTypography>
              <StyledTypography variant="body3">
                {t(tokens.common.discover_brands.summary)}
              </StyledTypography>
              <Box>
                <Button sx={heroButton} size="large" variant="outlined">
                  Read More
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
        <video autoPlay muted loop playsInline style={videoStyle}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </>
  );
};

HomeHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
