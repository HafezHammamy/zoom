import { Button, Typography, useTheme } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import image2 from "assets/image-2.png";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { buttonStyle } from "pages/home/components/brands/styles";

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

                  {!hideAction && (
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

const ImageBox = ({ reverse, passedImage }) => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

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
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${passedImage || image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: isRtl ? "left" : "right",
            ...(reverse
              ? { transform: isRtl ? "none" : "scaleX(-1)" }
              : { transform: isRtl ? "scaleX(-1)" : "none" }),
            zIndex: 0,
          },
        }}
      ></Box>
    </Grid>
  );
};

const StorySection = ({
  reverse,
  title,
  paragraph,
  title2,
  paragraph2,
  passedImage,
  backImage,
  backgroundColor = "#eee8f5",
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
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="stretch" sx={{ padding: 5 }}>
          {reverse && (
            <>
              <TitleBox
                title={title}
                paragraph={paragraph}
                backImage={backImage}
                title2={title2}
                paragraph2={paragraph2}
                hideAction={hideAction}
                component={component}
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
                title2={title2}
                paragraph2={paragraph2}
                backImage={backImage}
                hideAction={hideAction}
                component={component}
              />
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

StorySection.propTypes = {};

export default StorySection;
