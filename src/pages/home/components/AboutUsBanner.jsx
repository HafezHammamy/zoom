import { Box, Container, Grid } from "@mui/system";

import logo from "assets/logo.png";
import { tokens } from "locales/tokens";
import AboutSection from "pages/about/components/AboutSection";
import { useTranslation } from "react-i18next";
import image from "assets/dynamics-gradient-green.png";
import image2 from "assets/dynamicshp.png";

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
          backImage={image}
          passedImage={image2}
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
