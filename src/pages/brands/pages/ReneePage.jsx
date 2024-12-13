import { Box, Container } from "@mui/system";
import background_green from "assets/dynamics-gradient-green.png";
import girlImage from "assets/renee/renee-girls.png";
import productImage from "assets/renee/renee-product.png";
import video from "assets/renee/renee-video.mp4";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import AboutSection from "pages/about/components/AboutSection";
import { useTranslation } from "react-i18next";

const ReneePage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          title={t(tokens.brands.renee.title)}
          description={t(tokens.brands.renee.description)}
          videoSrc={video}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
        />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#E0FFF5" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#E0FFF5"
              title={t(tokens.brands.renee.whatIs)}
              paragraph={t(tokens.brands.renee.whatIsDescription)}
              backImage={background_green}
              passedImage={productImage}
              hideAction
            />
          </Container>
        </Box>
        <Box maxWidth="xxl" sx={{ backgroundColor: "#E0FFF5" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#E0FFF5"
              title={t(tokens.brands.renee.keyBenefits)}
              paragraph={
                <>
                  <ul>
                    <li>{t(tokens.brands.renee.keyBenefit1)}</li>
                    <li>{t(tokens.brands.renee.keyBenefit2)}</li>
                    <li>{t(tokens.brands.renee.keyBenefit3)}</li>
                  </ul>
                </>
              }
              passedImage={girlImage}
              hideAction
            />
          </Container>
        </Box>
      </main>
    </>
  );
};

ReneePage.propTypes = {};

export default ReneePage;
