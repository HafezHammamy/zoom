import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
import { Container, Stack } from "@mui/system";
import lenisnaImage from "assets/lenisna/LENISNA1.png";
import logo from "assets/lenisna/logo_light.png";
import { tokens } from "locales/tokens";
import React from "react";
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
              border: "1px dashed #7B1238",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                color: "#7B1238",
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
const FaceInjectionPointsLenisna = () => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  const { t } = useTranslation();
  // Define the positions for the "+" icons
  const positions = [
    {
      id: 1,
      top: "27%",
      left: "14%",
      label: t(tokens.brands.lenisna.face.point1),
    },
    {
      id: 2,
      top: "44%",
      left: "11%",
      label: t(tokens.brands.lenisna.face.point2),
    },
    {
      id: 3,
      top: "51%",
      left: "14%",
      label: t(tokens.brands.lenisna.face.point3),
    },
    {
      id: 4,
      top: "63%",
      left: "15.5%",
      label: t(tokens.brands.lenisna.face.point4),
    },
    {
      id: 5,
      top: "73%",
      left: "29%",
      label: t(tokens.brands.lenisna.face.point5),
    },
    {
      id: 6,
      top: "88%",
      left: "31%",
      label: t(tokens.brands.lenisna.face.point6),
    },
    {
      id: 7,
      top: "40%",
      left: "31.5%",
      label: t(tokens.brands.lenisna.face.point7),
    },
    {
      id: 8,
      top: "50%",
      left: "31%",
      label: t(tokens.brands.lenisna.face.point8),
    },
    // body
    {
      id: 9,
      top: "24%",
      left: "87%",
      label: t(tokens.brands.lenisna.body.point1),
    },
    {
      id: 10,
      top: "40%",
      left: "71%",
      label: t(tokens.brands.lenisna.body.point2),
    },
    {
      id: 11,
      top: "76%",
      left: "81%",
      label: t(tokens.brands.lenisna.body.point3),
    },
    {
      id: 12,
      top: "84%",
      left: "82%",
      label: t(tokens.brands.lenisna.body.point4),
    },
    {
      id: 13,
      top: "91%",
      left: "78%",
      label: t(tokens.brands.lenisna.body.point5),
    },
  ];

  return (
    <Box maxWidth="xxl">
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          p: "0px !important",
        }}
      >
        <Box
          component={"img"}
          src={lenisnaImage}
          sx={{
            width: "100%",
            p: 0,
            transform: isRtl ? "scaleX(-1)" : "none",
          }}
        />
        <Box
          sx={{
            width: "25%",
            position: "absolute",
            top: 150,
            left: 0,
            right: 0,
            margin: "auto",
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Box
              component={"img"}
              src={logo}
              sx={{
                width: "100%",
              }}
            />
            <Typography variant="body2" sx={{ color: "#ffffff" }}>
              {t(tokens.brands.lenisna.face.title)}
            </Typography>
          </Stack>
        </Box>

        {positions.map((position, index) => (
          <Point key={index} position={position} />
        ))}
      </Container>
    </Box>
  );
};

export default FaceInjectionPointsLenisna;
