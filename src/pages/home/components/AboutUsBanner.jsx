import { Button, Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import image2 from "assets/image-2.png";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { buttonStyle } from "./brands/styles";
import logo from "assets/logo.png";
import AboutSection from "pages/about/components/AboutSection";

const AboutUsBanner = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        maxWidth="xxl"
        sx={{
          backgroundColor: "#eee8f5",
        }}
      >
        <AboutSection
          title={t(tokens.about.title)}
          paragraph={t(tokens.about.paragraph)}
        />
        <Grid container spacing={2} alignItems="stretch">
          <Grid offset={1} size={11}>
            <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
              <img style={{ height: "50px" }} src={logo} alt={"Dynamics"} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUsBanner;
