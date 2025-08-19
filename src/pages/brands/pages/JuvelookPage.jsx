import { Box, Container } from "@mui/system";
import background_green from "assets/dynamics-gradient-green.png";
import heroProductImage from "assets/juvelook/juvelook-product-hero.png";
import productImage from "assets/juvelook/juvelook-product1.png";
import girlImage from "assets/juvelook/juvelookgirl.png";
import image from "assets/juvelook/juvelookHeroImage1.png";
import video from "assets/BrandsMovie.mp4";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { ImageHero } from "layout/components/ImageHero";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import AboutSection from "pages/about/components/AboutSection";
import { useTranslation } from "react-i18next";
import JuvelookProductComponent from "../components/JuvelookProductComponent";
import FaceInjectionPointsJuvelook from "../components/FaceInjectionPointsJuvelook";

const JuvelookPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          title2={t(tokens.brands.juvelook.pageTitle)}
          description={t(tokens.brands.juvelook.pageDescription)}
          videoSrc={video}
        />
        <ImageHero
          image={image}
          title={t(tokens.brands.juvelook.whatIs)}
          description={t(tokens.brands.juvelook.whatIsDescription)}
          actionPath="#"
        />
        <JuvelookProductComponent />
        <FaceInjectionPointsJuvelook />
        {false && (
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
        )}
        <ImageHero
          image={heroProductImage}
          title={t(tokens.brands.juvelook.howIs)}
          description={t(tokens.brands.juvelook.howIsDescription)}
        />

        {false && (
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
        )}
      </main>
    </>
  );
};

JuvelookPage.propTypes = {};

export default JuvelookPage;
