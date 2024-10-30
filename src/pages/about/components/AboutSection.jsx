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
    <Grid size={7}>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
          color: "white",
        }}
      >
        <Stack direction={"row"} justifyContent="center">
          <Stack
            spacing={5}
            direction={"column"}
            sx={{
              padding: "10vh",
              boxSizing: "content-box",
            }}
          >
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body1">{paragraph}</Typography>
            {false && (
              <Button sx={buttonStyle} size="large" variant="outlined">
                {t(tokens.common.buttons.readMore)}
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

const ImageBox = ({ reverse }) => {
  return (
    <Grid size={5} sx={{ position: "relative" }}>
      <Box
        component="img"
        src={image2}
        alt="About Us"
        sx={{
          position: "absolute",
          height: "40vh",
          ...(reverse ? { left: -70 } : { right: -70 }),
          top: 60,
          zIndex: 1,
        }}
      />
    </Grid>
  );
};
const AboutSection = ({ reverse, title, paragraph }) => {
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
              <ImageBox reverse={true} />
            </>
          )}
          {!reverse && (
            <>
              <ImageBox reverse={false} />
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
