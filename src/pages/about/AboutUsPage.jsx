import { Box, Container, Grid, Stack } from "@mui/system";
import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { AboutUsHero } from "./components/AboutUsHero";
import ValuesBanner from "./components/ValuesBanner";
import product from "assets/about.svg";
import productRtl from "assets/aboutRtl.png";

import background_dark from "assets/dynamics-gradient-dark.png";
import background_green from "assets/dynamics-gradient-green.png";
import useScrollToTop from "hooks/useScrollToTop";
import DualSection from "./components/DualSection";
import { Button, useTheme } from "@mui/material";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { RouterLink } from "layout/components/router-link";
import { paths } from "paths";

const AboutUsPage = (props) => {
  usePageView();
  const { t } = useTranslation();
  useScrollToTop();
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  return (
    <>
      <Seo />
      <main>
        <AboutUsHero />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#eee8f5" }}>
          <Container maxWidth="xxl">
            <DualSection
              reverse={true}
              title1={t(tokens.about.title)}
              paragraph1={t(tokens.about.page.card1)}
              title2={t(tokens.about.page.card2.title)}
              paragraph2={t(tokens.about.page.card2.paragraph)}
              backImage2={background_green}
            />
          </Container>
          <Container maxWidth="xl">
            <ValuesBanner />
          </Container>
          <Container maxWidth="xxl">
            <DualSection
              reverse={true}
              title1={t(tokens.about.page.card3.title)}
              paragraph1={t(tokens.about.page.card3.paragraph)}
              title2={t(tokens.about.page.card4.title)}
              paragraph2={t(tokens.about.page.card4.paragraph)}
              backImage1={background_dark}
              backImage2={background_green}
            />
          </Container>
          <Container
            maxWidth="xxl"
            sx={{
              backgroundImage: `url(${isRtl ? productRtl : product})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              position: "relative",
              height: "100%",
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <Box maxWidth="xxl">
              <Container maxWidth="xxl">
                <Grid
                  container
                  spacing={2}
                  alignItems="stretch"
                  sx={{ padding: 5 }}
                >
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                      sx={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white",
                      }}
                    >
                      <Stack direction="row" justifyContent="center">
                        <Box
                          sx={{
                            width: { xs: "100%", md: "80%" },
                            minHeight: { md: "660px" },
                            display: "flex",
                          }}
                        >
                          <Stack
                            spacing={5}
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            sx={{
                              height: "100%",
                              width: "100%",
                              px: { xs: 4, md: 6 },
                              py: { xs: 6, md: 8 },
                              pt: { xs: 6, md: 18 },
                              textAlign: "left",
                            }}
                          >
                            <Stack spacing={3} direction={"column"}>
                              <Box
                                maxWidth="xxl"
                                sx={{
                                  height: "100vh",
                                  width: "100%",
                                }}
                              >
                                <Stack
                                  spacing={3}
                                  sx={{
                                    color: "#fff",
                                    height: "100%",
                                  }}
                                  justifyContent="center"
                                >
                                  <QuoteTypography variant="body1">
                                    {t(tokens.about.page.product.title)}
                                  </QuoteTypography>
                                  <StyledTypography variant="h2">
                                    {t(tokens.about.page.product.subtitle)}
                                  </StyledTypography>
                                  <StyledTypography variant="body2">
                                    {t(tokens.about.page.product.paragraph)}
                                  </StyledTypography>
                                  <Box>
                                    <Button
                                      LinkComponent={RouterLink}
                                      href={paths.ourBrands}
                                      sx={{
                                        color: "white",
                                        borderColor: "white",
                                        height: "65px",
                                        width: "281px",
                                        "&:hover": {
                                          borderColor: "white",
                                          color: "#ab92e1",
                                          backgroundColor: "white",
                                        },
                                      }}
                                      size="large"
                                      variant="outlined"
                                    >
                                      {t(tokens.common.buttons.readMore)}
                                    </Button>
                                  </Box>
                                </Stack>
                              </Box>
                            </Stack>
                          </Stack>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Container>
        </Box>
      </main>
    </>
  );
};

AboutUsPage.propTypes = {};

export default AboutUsPage;
