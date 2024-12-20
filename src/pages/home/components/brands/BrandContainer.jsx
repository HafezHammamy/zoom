import { Button, CircularProgress, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { RouterLink } from "layout/components/router-link";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./brands.css";
import { buttonStyle, videoStyle } from "./styles";

const heroTextStyle = {
  color: "#fff",
  width: "50%",
};

const loaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "24px",
};

const BrandContainer = ({ title, description, video, subTitle, path }) => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false); // Hide loader once the video can play
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{ flexGrow: 1, paddingTop: "10%" }}
        >
          <Stack spacing={3} sx={heroTextStyle} className="slide-up">
            <QuoteTypography variant="h6">{title}</QuoteTypography>
            <Typography variant="h5">{subTitle}</Typography>
            <StyledTypography variant="body2">{description} </StyledTypography>
            <Box>
              <Button
                sx={buttonStyle}
                size="large"
                variant="outlined"
                LinkComponent={RouterLink}
                href={path}
              >
                {t(tokens.common.discover_brand)}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      {isLoading && (
        <CircularProgress style={loaderStyle} size={60} thickness={5} />
      )}

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
    </>
  );
};

BrandContainer.propTypes = {};

export default BrandContainer;
