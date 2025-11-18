import { Button, Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StyledTypography from "layout/components/StyledTypography";
import PropTypes from "prop-types";
import { useState } from "react";
import { keyframes } from "@emotion/react";
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
  paddingBottom: "calc(5vh + 75px)", // 5vh + ~2cm (75px)
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

const bounce = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
`;

const scrollButtonStyle = {
  position: "absolute",
  bottom: "95px", // 20px + ~2cm (75px)
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 4,
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "50%",
  width: "56px",
  height: "56px",
  color: "white",
  animation: `${bounce} 2s infinite`,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "rgba(255, 255, 255, 0.8)",
    transform: "translateX(-50%) translateY(3px)",
  },
  transition: "all 0.3s ease",
};

export const VideoHero = ({
  title,
  title2,
  description,
  videoSrc,
  actionPath,
  actionLabel,
  actionOnClick,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleScrollDown = () => {
    // Get navbar element (header) to calculate its height
    const navbar = document.querySelector("header");
    const navbarHeight = navbar ? navbar.offsetHeight : 120; // Fallback to 120px if not found
    
    // Scroll to just below the hero section, accounting for navbar height
    window.scrollTo({
      top: window.innerHeight - navbarHeight,
      behavior: "smooth",
    });
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

      {/* Scroll Down Button */}
      <IconButton
        onClick={handleScrollDown}
        sx={scrollButtonStyle}
        aria-label="Scroll down"
      >
        <KeyboardArrowDownIcon sx={{ fontSize: "32px" }} />
      </IconButton>

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
                  {...(actionOnClick
                    ? { onClick: actionOnClick }
                    : { LinkComponent: RouterLink, href: actionPath })}
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
