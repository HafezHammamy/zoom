import { Button, Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import image2 from "assets/image-2.png";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { buttonStyle } from "pages/home/components/brands/styles";

const TitleBox = ({ title, paragraph, backImage }) => {
  const { t } = useTranslation();

  return (
    <Grid size={6}>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backImage || image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Stack direction={"row"} justifyContent="center">
          <Box sx={{ width: "60%", height: "660px" }}>
            <Stack
              spacing={5}
              direction={"column"}
              justifyContent="center"
              alignContent="center"
              sx={{ height: "100%" }}
            >
              <Stack spacing={3} direction={"column"}>
                <Typography variant="h3">{title}</Typography>
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
        sx={{
          position: "absolute",
          top: "10%",
          height: "80%",
          width: "115%",
          overflow: "hidden",
          ...(reverse ? { left: -110 } : { right: -110 }),
          zIndex: 1,
          backgroundImage: `url(${passedImage || image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </Grid>
  );
};
const AboutSection = ({
  reverse,
  title,
  paragraph,
  passedImage,
  backImage,
}) => {
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
      <Container maxWidth="xxl">
        <Grid container spacing={2} alignItems="stretch" sx={{ padding: 5 }}>
          {reverse && (
            <>
              <TitleBox
                title={title}
                paragraph={paragraph}
                backImage={backImage}
              />
              <ImageBox reverse={true} passedImage={passedImage} />
            </>
          )}
          {!reverse && (
            <>
              <ImageBox reverse={false} passedImage={passedImage} />
              <TitleBox
                title={title}
                paragraph={paragraph}
                backImage={backImage}
              />
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

AboutSection.propTypes = {};

export default AboutSection;
