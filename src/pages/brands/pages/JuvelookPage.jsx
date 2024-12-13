import video from "assets/our_brands.mp4";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import image from "assets/juvelook/juvelookHeroImage1.png";
import productImage from "assets/juvelook/juvelook-product1.png";
import girlImage from "assets/juvelook/juvelookgirl.png";
import heroProductImage from "assets/juvelook/juvelook-product-hero.png";
import { ImageHero } from "layout/components/ImageHero";
import { Box, Container } from "@mui/system";
import AboutSection from "pages/about/components/AboutSection";
import background_green from "assets/dynamics-gradient-green.png";
import { Typography } from "@mui/material";

const JuvelookPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          title={t(tokens.brands.juvelook.title)}
          description={t(tokens.brands.juvelook.description)}
          videoSrc={video}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
        />

        <ImageHero
          image={image}
          title={t(tokens.brands.juvelook.whatIs)}
          description={t(tokens.brands.juvelook.whatIsDescription)}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
        />

        <Box maxWidth="xxl" sx={{ backgroundColor: "#CCE5FF" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#CCE5FF"
              title={t(tokens.brands.juvelook.keyBenefits)}
              paragraph={
                <>
                  <ul>
                    <li>{t(tokens.brands.juvelook.keyBenefit1)}</li>
                    <li>{t(tokens.brands.juvelook.keyBenefit2)}</li>
                    <li>{t(tokens.brands.juvelook.keyBenefit3)}</li>
                  </ul>
                </>
              }
              passedImage={productImage}
              backImage={background_green}
              hideAction
            />
          </Container>
        </Box>
        <ImageHero
          image={heroProductImage}
          title={t(tokens.brands.juvelook.howIs)}
          description={t(tokens.brands.juvelook.howIsDescription)}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
        />

        <Box maxWidth="xxl" sx={{ backgroundColor: "#CCE5FF" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#CCE5FF"
              reverse={true}
              title2={t(tokens.brands.juvelook.results)}
              paragraph2={
                <>
                  <ul>
                    <li>{t(tokens.brands.juvelook.result1)}</li>
                    <li>{t(tokens.brands.juvelook.result2)}</li>
                    <li>{t(tokens.brands.juvelook.result3)}</li>
                  </ul>
                </>
              }
              title={t(tokens.brands.juvelook.application)}
              paragraph={t(tokens.brands.juvelook.applicationDescription)}
              passedImage={girlImage}
              hideAction
            />
          </Container>
        </Box>
      </main>
    </>
  );
};

JuvelookPage.propTypes = {};

export default JuvelookPage;
