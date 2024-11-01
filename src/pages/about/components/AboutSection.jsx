import { Button, Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import image2 from "assets/image-2.png";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { buttonStyle } from "pages/home/components/brands/styles";

const TitleBox = ({ title, paragraph }) => {
  const { t } = useTranslation();

  return (
    <Grid size={6}>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Stack direction={"row"} justifyContent="center">
          <Box sx={{ width: "60%", height: "80vh" }}>
            <Stack
              spacing={5}
              direction={"column"}
              justifyContent="center"
              alignContent="center"
              sx={{ height: "100%" }}
            >
              <Stack spacing={3} direction={"column"}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body1">{paragraph}</Typography>
                <Button sx={buttonStyle} size="large" variant="outlined">
                  {t(tokens.common.buttons.readMore)}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

const ImageBox = ({ reverse, passedImage }) => {
  return (
    <Grid size={6} sx={{ position: "relative" }}>
      <Box
        component="img"
        src={passedImage || image2}
        alt="About Us"
        sx={{
          position: "absolute",
          top: "7vh",
          height: "65vh",
          right: -100,
          ...(reverse ? { left: -100 } : { right: -100 }),
          zIndex: 1,
        }}
      />
    </Grid>
  );
};
const AboutSection = ({ reverse, title, paragraph, passedImage }) => {
  return (
    <Box
      maxWidth="xxl"
      sx={{
        backgroundColor: "#eee8f5",
        position: "relative",
        height: "100%",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="stretch">
          {reverse && (
            <>
              <TitleBox title={title} paragraph={paragraph} />
              <ImageBox reverse={true} passedImage={passedImage} />
            </>
          )}
          {!reverse && (
            <>
              <ImageBox reverse={false} passedImage={passedImage} />
              <TitleBox title={title} paragraph={paragraph} />
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

AboutSection.propTypes = {};

export default AboutSection;
