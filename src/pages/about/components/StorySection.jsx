import { Button, Typography, useTheme, useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 899px)");

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backImage || image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Stack direction="row" justifyContent="center">
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              minHeight: { xs: "auto", md: "660px" },
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{
                height: "100%",
                width: "100%",
                px: { xs: 2, md: 15 },
                py: { xs: 3, md: 8 },
                pt: { xs: 3, md: 18 },
                textAlign: "left",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              {component ? (
                <Box
                  sx={{
                    width: "100%",
                    "& > *": {
                      width: "100%",
                    },
                  }}
                >
                  {component}
                </Box>
              ) : (
                <Stack spacing={3} direction={"column"} sx={{ width: "100%" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      pt: { xs: 0, md: 2 },
                      "@media (max-width: 899px)": {
                        fontSize: "1.5rem",
                      },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "justify",
                      "@media (max-width: 899px)": {
                        fontSize: "0.875rem",
                      },
                    }}
                  >
                    {paragraph}
                  </Typography>
                  {title2 && (
                    <Typography
                      variant="h3"
                      sx={{
                        "@media (max-width: 899px)": {
                          fontSize: "1.5rem",
                        },
                      }}
                    >
                      {title2}
                    </Typography>
                  )}
                  {paragraph2 && (
                    <Typography
                      variant="body1"
                      sx={{
                        "@media (max-width: 899px)": {
                          fontSize: "0.875rem",
                        },
                      }}
                    >
                      {paragraph2}
                    </Typography>
                  )}

                  {!hideAction && (
                    <Button
                      sx={{
                        ...buttonStyle,
                        "@media (max-width: 600px)": {
                          fontSize: "0.65rem",
                          padding: "3px 8px",
                          minWidth: "auto",
                          width: "auto",
                          height: "28px",
                          borderWidth: "1px",
                        },
                        "@media (min-width: 601px) and (max-width: 899px)": {
                          fontSize: "0.75rem",
                          padding: "4px 10px",
                          minWidth: "auto",
                          width: "auto",
                          height: "32px",
                          borderWidth: "1px",
                        },
                      }}
                      size={isMobile ? "small" : isTablet ? "medium" : "large"}
                      variant="outlined"
                    >
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
    <Grid
      size={{ xs: 12, md: 6 }}
      sx={{
        position: "relative",
        display: { xs: "none", md: "block" },
      }}
    >
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
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{ padding: { xs: 2, md: 5 } }}
        >
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
