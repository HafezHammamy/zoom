import { Button, Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import image2 from "assets/image-2.png";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { buttonStyle } from "./brands/styles";
import logo from "assets/logo.png";

const AboutUsBanner = (props) => {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: "#eee8f5",
        position: "relative",
        height: "100%",
      }}
    >
      <Grid container spacing={2} alignItems="stretch">
        <Grid size={5} sx={{ position: "relative" }}>
          <Box
            component="img"
            src={image2}
            alt="About Us"
            sx={{
              position: "absolute",
              height: "600px",
              borderRadius: 2,
              right: -100,
              top: 100,
              zIndex: 1,
            }}
          />
        </Grid>
        <Grid size={7}>
          <Box
            sx={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              color: "white",
            }}
          >
            <Stack direction={"row"} justifyContent="center">
              <Stack
                spacing={5}
                direction={"column"}
                sx={{
                  padding: "20%",
                  boxSizing: "content-box",
                  minHeight: "50vh",
                }}
              >
                <Typography variant="h2">{t(tokens.about.title)}</Typography>
                <Typography variant="body2">
                  {t(tokens.about.paragraph)}
                </Typography>
                <Button sx={buttonStyle} size="large" variant="outlined">
                  {t(tokens.common.buttons.readMore)}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid offset={1} size={11}>
          <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
            <img style={{ height: "50px" }} src={logo} alt={"Dynamics"} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUsBanner;
