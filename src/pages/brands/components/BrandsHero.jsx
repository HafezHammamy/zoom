import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import useVideoLoader from "hooks/useVideoLoader";
import video from "assets/our_brands.mp4";
import { RouterLink } from "layout/components/router-link";
import { paths } from "paths";

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

const heroTextStyle = {
  color: "#fff",
  width: "50%",
  textAlign: "left",
  alignItems: "flex-start",
};

export const BrandsHero = (props) => {
  const { t } = useTranslation();
  const { Loader, handleVideoLoaded } = useVideoLoader();

  return (
    <>
      <Box
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "75vh" },
          width: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(145deg, #ff77a9, #d3577f, #b3426a, #843157)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ position: "relative", zIndex: 1, height: "100%" }}
        >
          <Stack
            alignItems="center"
            justifyContent="flex-start"
            spacing={2}
            sx={{ height: "100%", flexDirection: "row" }}
          >
            <Stack spacing={3} sx={heroTextStyle}>
              <StyledTypography variant="h2">
                {t(tokens.brands.our_collection.title1)}
              </StyledTypography>
              <StyledTypography variant="body3">
                {t(tokens.brands.our_collection.paragraph3)}
              </StyledTypography>
              <Box>
                <Button
                  sx={heroButton}
                  size="large"
                  variant="outlined"
                  LinkComponent={RouterLink}
                  href={paths.aboutUs}
                >
                  {t(tokens.nav.about)}
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

BrandsHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
