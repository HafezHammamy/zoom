import { Box, Container, Stack } from "@mui/system";
import image2 from "assets/ksurgery/cover-girl-2.svg";
import image from "assets/ksurgery/cover-girl.png";
import icons from "assets/ksurgery/icons.svg";
import girlImage from "assets/ksurgery/ksurgery-filler.jpg";
import video3 from "assets/ksurgery/ksurgery-movie3.mp4";
import productImage from "assets/ksurgery/ksurgery-product.jpg";
import video from "assets/ksurgery/kusrgery-movie.mp4";
import video2 from "assets/ksurgery/kusrgery-movie2.mp4";

import { Typography } from "@mui/material";
import background_green from "assets/dynamics-gradient-green.png";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { ImageHero } from "layout/components/ImageHero";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import AboutSection from "pages/about/components/AboutSection";
import { useTranslation } from "react-i18next";
import KsurgeryProductComponent from "../components/KsurgeryProductComponent";

const KsurgeryPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          title={t(tokens.brands.ksurgery.title)}
          description={t(tokens.brands.ksurgery.description)}
          videoSrc={video}
          actionPath="#"
        />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#FFFFFF" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#FFFFFF"
              title={t(tokens.brands.ksurgery.whatIs)}
              paragraph={t(tokens.brands.ksurgery.whatIsDescription)}
              passedImage={productImage}
              hideAction
              component={
                <Stack spacing={2}>
                  <Typography variant="h3">
                    {t(tokens.brands.ksurgery.whatIs)}
                  </Typography>
                  <Typography variant="body">
                    {t(tokens.brands.ksurgery.whatIsDescription)}
                  </Typography>
                  <Typography variant="h4">
                    {t(tokens.brands.ksurgery.keyBenefits)}
                  </Typography>
                  <ul>
                    <li>{t(tokens.brands.ksurgery.keyBenefit1)}</li>
                    <li>{t(tokens.brands.ksurgery.keyBenefit2)}</li>
                    <li>{t(tokens.brands.ksurgery.keyBenefit3)}</li>
                  </ul>
                </Stack>
              }
            />
          </Container>
        </Box>
        <Box maxWidth="xxl" sx={{ backgroundColor: "#FFFFFF" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#FFFFFF"
              reverse={true}
              title={t(tokens.brands.ksurgery.opera)}
              paragraph={t(tokens.brands.ksurgery.applicationDescription)}
              passedImage={girlImage}
              hideAction
              backImage={background_green}
              component={
                <Stack spacing={2}>
                  <Typography variant="h3">
                    {t(tokens.brands.ksurgery.opera)}
                  </Typography>
                  <Typography variant="body">
                    {t(tokens.brands.ksurgery.operaDescription)}
                  </Typography>
                  <Typography variant="body">
                    {t(tokens.brands.ksurgery.operaDescription1)}
                  </Typography>
                  <Typography variant="body">
                    {t(tokens.brands.ksurgery.operaDescription2)}
                  </Typography>
                </Stack>
              }
            />
          </Container>
        </Box>
        <Box component={"img"} src={icons} maxWidth="xxl" />
        <VideoHero
          title={t(tokens.brands.ksurgery.howIs)}
          description={t(tokens.brands.ksurgery.howIsDescription)}
          videoSrc={video2}
          actionPath="#"
        />

        <KsurgeryProductComponent collection={1} />

        <VideoHero
          title={t(tokens.brands.ksurgery.skinbooster1)}
          description={t(tokens.brands.ksurgery.skinboosterTitle1)}
          videoSrc={video3}
          actionPath="#"
        />

        <Box maxWidth="xxl" sx={{ backgroundColor: "#FFFFFF" }}>
          <Stack alignItems={"center"}>
            <Box maxWidth="lg" sx={{ p: 3, justifyContent: "center" }}>
              <Typography variant="body2" sx={{ textAlign: "justify" }}>
                {t(tokens.brands.ksurgery.description3)}
              </Typography>
            </Box>
          </Stack>
        </Box>

        <KsurgeryProductComponent collection={2} />

        <ImageHero
          image={image}
          title={t(tokens.brands.ksurgery.howIs)}
          description={t(tokens.brands.ksurgery.howIsDescription)}
          actionPath="#"
          darken={false}
          component={
            <>
              <Stack spacing={2}>
                <Typography variant="h3">
                  {t(tokens.brands.ksurgery.skinbosoter)}
                </Typography>
                <Typography variant="body2">
                  {t(tokens.brands.ksurgery.benefits.title)}
                </Typography>
                <Typography variant="body2">
                  {t(tokens.brands.ksurgery.benefits.description)}
                </Typography>
                <Box>
                  <ul>
                    <li> {t(tokens.brands.ksurgery.benefits.item1)}</li>
                    <li> {t(tokens.brands.ksurgery.benefits.item2)}</li>
                    <li> {t(tokens.brands.ksurgery.benefits.item3)}</li>
                    <li> {t(tokens.brands.ksurgery.benefits.item4)}</li>
                    <li> {t(tokens.brands.ksurgery.benefits.item5)}</li>
                    <li> {t(tokens.brands.ksurgery.benefits.item6)}</li>
                  </ul>
                </Box>
              </Stack>
            </>
          }
        />
        {false && (
          <ImageHero
            image={image2}
            title={t(tokens.brands.ksurgery.howIs)}
            description={t(tokens.brands.ksurgery.howIsDescription)}
            actionPath="#"
            actionLabel={t(tokens.common.buttons.readMore)}
            darken={false}
          />
        )}
      </main>
    </>
  );
};

KsurgeryPage.propTypes = {};

export default KsurgeryPage;
