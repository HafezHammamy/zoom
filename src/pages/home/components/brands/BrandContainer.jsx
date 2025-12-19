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
  width: { xs: "100%", md: "50%" },
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
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            flexGrow: 1,
            paddingTop: { xs: "5%", md: "10%" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Stack spacing={3} sx={heroTextStyle} className="slide-up">
            <QuoteTypography
              variant="h6"
              sx={{
                "@media (max-width: 899px)": {
                  fontSize: "1rem",
                },
              }}
            >
              {title}
            </QuoteTypography>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width: 899px)": {
                  fontSize: "1.25rem",
                },
              }}
            >
              {subTitle}
            </Typography>
            <StyledTypography
              variant="body2"
              sx={{
                textAlign: "justify",
                "@media (max-width: 899px)": {
                  fontSize: "0.875rem",
                },
              }}
            >
              {description}{" "}
            </StyledTypography>
            <Box>
              <Button
                sx={{
                  ...buttonStyle,
                  "@media (max-width: 899px)": {
                    fontSize: "0.75rem",
                    padding: "4px 12px",
                    minWidth: "auto",
                    height: "32px",
                  },
                }}
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
        className="brand-video-responsive"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style>{`
        @media (max-width: 899px) {
          .brand-video-responsive {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
            transform: translate(-50%, -50%) !important;
            object-fit: cover !important;
            object-position: center !important;
          }
        }
      `}</style>
    </>
  );
};

BrandContainer.propTypes = {};

export default BrandContainer;
