import React from "react";
import {
  Box,
  ClickAwayListener,
  Fade,
  IconButton,
  Paper,
  Popper,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Container, Stack } from "@mui/system";
import faceImage from "assets/juvelook/juvelook-face.png";
import logo from "assets/juvelook/jubelook-light-logo.png";
import scarImage from "assets/juvelook/Scar.png";
import stretchImage from "assets/juvelook/Stretch.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
const Point = ({ position }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev); // Toggle Popper on click
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement="right"
            disablePortal={true}
            transition
            sx={{ padding: 0, zIndex: 1500 }}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{ p: 2 }}>{position.label}</Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
          <IconButton
            size="small"
            key={position.id}
            sx={{
              color: "white",
              position: "absolute",
              top: position.top,
              left: position.left,
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              border: "1px dashed #ABDFF4",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                color: "#ABDFF4",
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
              margin: 1,
            }}
            onClick={handleClick}
          >
            {open ? <ArrowForwardIcon /> : <AddIcon />}
          </IconButton>
        </div>
      </ClickAwayListener>
    </>
  );
};
const FaceInjectionPointsJuvelook = () => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  const { t } = useTranslation();
  // Define the positions for the "+" icons
  const positions = [
    {
      id: 1,
      top: "36%",
      left: "36%",
      label: t(tokens.brands.juvelook.face.point1),
    },
    {
      id: 2,
      top: "52%",
      left: "31%",
      label: t(tokens.brands.juvelook.face.point2),
    },
    {
      id: 3,
      top: "60%",
      left: "33%",
      label: t(tokens.brands.juvelook.face.point3),
    },
    {
      id: 4,
      top: "59%",
      left: "47%",
      label: t(tokens.brands.juvelook.face.point4),
    },
    {
      id: 5,
      top: "65%",
      left: "55%",
      label: t(tokens.brands.juvelook.face.point5),
    },
    {
      id: 6,
      top: "75%",
      left: "49%",
      label: t(tokens.brands.juvelook.face.point6),
    },
    {
      id: 7,
      top: "90%",
      left: "57%",
      label: t(tokens.brands.juvelook.face.point7),
    },
  ];

  return (
    <Box
      maxWidth="xxl"
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#ABDFF4",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{ position: "relative", zIndex: 1, height: "100%" }}
      >
        <Stack
          alignItems="flex-end"
          direction="row"
          spacing={2}
          sx={{ height: "100%" }}
        >
          <Box sx={{ width: "40%", height: "100%" }}>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ height: "100%" }}
              spacing={20}
            >
              <Box sx={{ width: "65%" }}>
                <Box component={"img"} src={logo} sx={{ width: "100%" }} />
                <Typography variant="body2" sx={{ color: "#ffffff" }}>
                  Injections Points
                </Typography>
              </Box>
              <Box>
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"row"}
                  spacing={10}
                  sx={{ width: "100%" }}
                >
                  <Stack sx={{ width: "30%" }} spacing={5}>
                    <Box component={"img"} src={stretchImage} />
                    <Box
                      sx={{
                        background: "#FFFFFF",
                        p: 1,
                        textAlign: "center",
                        color: "#ABDFF4",
                      }}
                    >
                      Stretch marks
                    </Box>
                  </Stack>
                  <Stack sx={{ width: "30%" }} spacing={5}>
                    <Box component={"img"} src={scarImage} />
                    <Box
                      sx={{
                        background: "#FFFFFF",
                        p: 1,
                        textAlign: "center",
                        color: "#ABDFF4",
                      }}
                    >
                      C-section scar
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "60%",
              height: "100%",
              overflow: "hidden",
              "::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${faceImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
                transform: isRtl ? "scaleX(-1)" : "none",
              },
            }}
          >
            {positions.map((position, index) => (
              <Point key={index} position={position} />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FaceInjectionPointsJuvelook;
