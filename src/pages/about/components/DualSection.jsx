import { Button, Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import { tokens } from "locales/tokens";
import { buttonStyle } from "pages/home/components/brands/styles";
import { useTranslation } from "react-i18next";

const TitleBox = ({
  title,
  paragraph,
  title2,
  paragraph2,
  backImage,
  hideAction = true,
  component,
}) => {
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
              {component ? (
                <>{component}</>
              ) : (
                <Stack spacing={3} direction={"column"}>
                  <Typography variant="h3">{title}</Typography>
                  <Typography variant="body1">{paragraph}</Typography>
                  {title2 && <Typography variant="h3">{title2}</Typography>}
                  {paragraph2 && (
                    <Typography variant="body1">{paragraph2}</Typography>
                  )}

                  {hideAction && (
                    <Button sx={buttonStyle} size="large" variant="outlined">
                      {t(tokens.common.buttons.readMore)}
                    </Button>
                  )}
                </Stack>
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

const DualSection = ({
  title1,
  paragraph1,
  backImage1,
  title2,
  paragraph2,
  backgroundColor = "#eee8f5",
  backImage2,
  hideAction = false,
  component = undefined,
}) => {
  return (
    <Box
      maxWidth="xxl"
      sx={{
        backgroundColor: { backgroundColor },
        position: "relative",
        height: "100%",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <Container maxWidth="xxl">
        <Grid container spacing={2} alignItems="stretch" sx={{ padding: 5 }}>
          <TitleBox
            title={title1}
            paragraph={paragraph1}
            backImage={backImage1}
            hideAction={hideAction}
            component={component}
          />
          <TitleBox
            title={title2}
            paragraph={paragraph2}
            backImage={backImage2}
            hideAction={hideAction}
            component={component}
          />
        </Grid>
      </Container>
    </Box>
  );
};

DualSection.propTypes = {};

export default DualSection;
