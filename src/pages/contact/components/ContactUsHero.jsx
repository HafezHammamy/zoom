import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import video from "assets/renee.mp4";
import useVideoLoader from "hooks/useVideoLoader";

const heroButton = {
  textTransform: "uppercase",
  color: "white",
  borderColor: "white",
  height: "65px",
  width: "auto",
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
  objectFit: "cover",
};

export const ContactUsHero = (props) => {
  const { t } = useTranslation();
  const { Loader, handleVideoLoaded } = useVideoLoader();

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Box
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, #ff77a9, #d3577f, #b3426a, #843157)",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, height: "100%" }}
        >
          <Stack
            alignItems="flex-end"
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, height: "100%", pb: 3 }}
          >
            <Stack spacing={3} sx={heroTextStyle}>
              <StyledTypography variant="h2">
                {t(tokens.nav.contact)}
              </StyledTypography>
              <StyledTypography variant="body3">
                {t(tokens.contact.hero.paragraph)}
              </StyledTypography>
              <Box>
                <Button
                  sx={heroButton}
                  size="large"
                  variant="outlined"
                  onClick={scrollToForm}
                >
                  {t(tokens.nav.contact)}
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
        {Loader}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={videoStyle}
          onCanPlay={handleVideoLoaded}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </>
  );
};

ContactUsHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
