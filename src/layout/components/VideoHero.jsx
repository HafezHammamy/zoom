import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import StyledTypography from "layout/components/StyledTypography";
import PropTypes from "prop-types";
import { useState } from "react";
import { RouterLink } from "./router-link";

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
  textAlign: "left",
  alignItems: "flex-start",
  position: "relative",
  zIndex: 2, // Ensure text appears above overlay
};

const videoContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  zIndex: 0,
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.2)", // Dark overlay with 20% opacity
  zIndex: 1,
};

const loaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "24px",
  zIndex: 3,
};

export const VideoHero = ({
  title,
  title2,
  description,
  videoSrc,
  actionPath,
  actionLabel,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <Box
      maxWidth="xxl"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box sx={overlayStyle} />

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={videoContainerStyle}
        onCanPlay={handleVideoLoaded}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 2, height: "100%", paddingBottom: 5 }}
      >
        <Stack
          alignItems="flex-end"
          justifyContent="flex-start"
          spacing={2}
          sx={{ height: "100%", flexDirection: "row" }}
        >
          <Stack spacing={3} sx={heroTextStyle}>
            {title && <StyledTypography variant="h2">{title}</StyledTypography>}
            {title2 && <Typography variant="h3">{title2}</Typography>}
            <StyledTypography variant="body2">{description}</StyledTypography>
            <Box>
              {actionLabel && (
                <Button
                  sx={heroButton}
                  size="large"
                  variant="outlined"
                  LinkComponent={RouterLink}
                  href={actionPath}
                >
                  {actionLabel}
                </Button>
              )}
            </Box>
          </Stack>
        </Stack>
      </Container>

      {/* Loader */}
      {isLoading && (
        <CircularProgress style={loaderStyle} size={60} thickness={5} />
      )}
    </Box>
  );
};

VideoHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
